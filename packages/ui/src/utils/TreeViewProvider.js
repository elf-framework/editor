/* eslint-disable no-unused-vars */
/* eslint-disable getter-return */
import { isArray } from "@elf-framework/sapa";

export class BaseTreeViewProvider {
  get items() {}

  get ids() {}

  has(id) {}

  get(id) {}

  set(id, obj) {}

  remove(id) {}

  setParent(targetId, parentId) {}

  removeParent(targetId) {}

  /**
   *
   * @param {*} parentId
   * @param {*} obj
   */
  appendChild(parentId, obj) {}

  getParentId(childId) {}

  deleteInfo(childObj) {}

  /**
   * parent 에서 child 를 삭제
   */
  removeChild(parentId, childId) {}

  insertChild(targetParentId, targetIndex, currentObject) {}

  findIndex(list = [], id) {}

  insertItem(targetId, currentId, type = "before") {}

  // target 의 앞으로 객체를 추가하기
  insertBefore(targetId, currentId) {}

  // target 의 앞으로 객체를 추가하기
  insertAfter(targetId, currentId) {}

  // parent 의 마지막에 child 객체를 추가하기
  insertLast(parentId, childId) {}
}

export class TreeViewProvider extends BaseTreeViewProvider {
  #idMap = {};
  #items = [];
  #parentList = {};

  constructor(items = []) {
    super();
    this.#items = items;

    this.#initialize();
  }

  #initialize() {
    this.#traverse(this.#items);
  }

  #traverse(items = [], parentId) {
    items.forEach((it) => {
      // id 가 존재하면 에러 발생
      if (this.#idMap[it.id]) throw new Error("id is duplicated.");

      this.#idMap[it.id] = it;
      this.#parentList[it.id] = parentId;

      if (it.children?.length) {
        this.#traverse(it.children, it.id);
      }
    });
  }

  get items() {
    return this.#items;
  }

  get ids() {
    return Object.keys(this.#idMap);
  }

  has(id) {
    return Boolean(this.#idMap[id]);
  }

  get(id) {
    return this.#idMap[id];
  }

  set(id, obj) {
    const target = this.get(id);

    if (target) {
      Object.assign(target, obj);
    } else {
      this.#idMap[id] = obj;
    }
  }

  remove(id) {
    const obj = this.#idMap[id];
    delete this.#idMap[id];
    return obj;
  }

  setParent(targetId, parentId) {
    this.#parentList[targetId] = parentId;
  }

  removeParent(targetId) {
    // root 에 있을 때는 부모는 삭제
    delete this.#parentList[targetId];
  }

  /**
   *
   * @param {*} parentId
   * @param {*} obj
   */
  appendChild(parentId, obj) {
    const parent = this.get(parentId);

    if (!parent) return;

    if (!obj.id) throw new Error("obj.id is required.");

    if (isArray(parent.children)) {
      parent.children.push(obj);
    } else {
      parent.children = [obj];
    }

    this.set(obj.id, obj);
    this.setParent(obj.id, parentId);
    return obj;
  }

  getParentId(childId) {
    return this.#parentList[childId];
  }

  deleteInfo(childObj) {
    if (childObj) {
      this.remove(childObj.id);
      this.removeParent(childObj.id);
      return childObj;
    }
  }

  /**
   * parent 에서 child 를 삭제
   */
  removeChild(parentId, childId) {
    const parent = this.get(parentId);
    const index = this.findIndex(parent.children, childId);

    if (index < 0) {
      return;
    }

    let childObj;

    if (parent) {
      [childObj] = parent.children.splice(index, 1);

      if (parent.children?.length === 0) {
        delete parent.children;
      }
    } else {
      [childObj] = this.#items.splice(index, 1);
    }

    return this.deleteInfo(childObj);
  }

  insertChild(targetParentId, targetIndex, currentObject) {
    const targetParent = this.get(targetParentId);

    // id map 에 추가
    this.set(currentObject.id, currentObject);
    if (targetParent) {
      targetParent.children.splice(targetIndex, 0, currentObject);

      this.setParent(currentObject.id, targetParentId);
    } else {
      // parent 가 없으면 root 리스트에 추가
      this.#items.splice(targetIndex, 0, currentObject);

      this.removeParent(currentObject.id);
    }
  }

  findIndex(list = this.#items, id) {
    return list.findIndex((it) => it.id === id);
  }

  insertItem(targetId, currentId, type = "before") {
    const targetParentId = this.getParentId(targetId);
    const targetParent = this.get(targetParentId);

    // target의 위치 찾기
    const targetIndex = this.findIndex(targetParent?.children, targetId);

    const currentParentId = this.getParentId(currentId);
    const currentObject = this.removeChild(currentParentId, currentId);

    this.insertChild(
      targetParentId,
      type === "before" ? targetIndex : targetIndex + 1,
      currentObject
    );
  }

  // target 의 앞으로 객체를 추가하기
  insertBefore(targetId, currentId) {
    return this.insertItem(targetId, currentId, "before");
  }

  // target 의 앞으로 객체를 추가하기
  insertAfter(targetId, currentId) {
    return this.insertItem(targetId, currentId, "after");
  }

  // parent 의 마지막에 child 객체를 추가하기
  insertLast(parentId, childId) {
    const lastParentId = this.getParentId(childId);
    const childObj = this.removeChild(lastParentId, childId);

    if (childObj) {
      this.appendChild(parentId, childObj);
    }
  }
}
