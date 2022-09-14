import ChevronRightFilled from "@elf-framework/icon/ChevronRightFilled";
import DescriptionFilled from "@elf-framework/icon/DescriptionFilled";
import FolderFilled from "@elf-framework/icon/FolderFilled";
import { isArray, useState } from "@elf-framework/sapa";
import { Button, TreeView, VBox } from "@elf-framework/ui";

class TreeViewProvider {
  #idMap = {};
  #items = [];
  #parentList = {};

  constructor(items = []) {
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

export function MainView() {
  const [provider] = useState(
    new TreeViewProvider([
      {
        id: "1",
        title: "Item 1",
        children: [
          {
            id: "1.1",
            title: "Item 1.1",
            children: [
              {
                id: "1.1.1",
                title: "Item 1.1.1",
              },
              {
                id: "1.1.2",
                title: "Item 1.1.2",
              },
              {
                id: "1.1.3",
                title: "Item 1.1.3",
              },
              {
                id: "1.1.4",
                title: "Item 1.1.4",
              },
              {
                id: "1.1.5",
                title: "Item 1.1.5",
              },
              {
                id: "1.1.6",
                title: "Item 1.1.6",
              },
              {
                id: "1.1.7",
                title: "Item 1.1.7",
              },
              {
                id: "1.1.8",
                title: "Item 1.1.8",
              },
              {
                id: "1.1.9",
                title: "Item 1.1.9",
                children: [
                  {
                    id: "1.1.9.1",
                    title: "Item 1.1.9.1",
                  },
                  {
                    id: "1.1.9.2",
                    title: "Item 1.1.9.2",
                  },
                  {
                    id: "1.1.9.3",
                    title: "Item 1.1.9.3",
                  },
                  {
                    id: "1.1.9.4",
                    title: "Item 1.1.9.4",
                  },
                  {
                    id: "1.1.9.5",
                    title: "Item 1.1.9.5",
                  },
                  {
                    id: "1.1.9.6",
                    title: "Item 1.1.9.6",
                  },
                  {
                    id: "1.1.9.7",
                    title: "Item 1.1.9.7",
                  },
                  {
                    id: "1.1.9.8",
                    title: "Item 1.1.9.8",
                  },
                  {
                    id: "1.1.9.9",
                    title: "Item 1.1.9.9",
                  },
                  {
                    id: "1.1.9.10",
                    title: "Item 1.1.9.10",
                  },
                ],
              },
              {
                id: "1.1.10",
                title: "Item 1.1.5",
              },
            ],
          },
          {
            id: "1.2",
            title: "Item 1.2",
          },
        ],
      },
    ])
  );

  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: [60, 200],
        position: "relative",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          width: 300,
          height: 300,
          flex: "none",
        }}
      >
        <TreeView
          draggable={true}
          // selectionStyle="checkbox"
          renderContext={(item) => {
            return item.data.children?.length ? (
              <FolderFilled />
            ) : (
              <DescriptionFilled />
            );
          }}
          renderArrow={(item) => {
            return <ChevronRightFilled />;
          }}
          items={provider.items}
          onClickNode={(item) => {
            item.data.selected = !item.data.selected;
            this.render();
          }}
          onToggleNode={(item) => {
            item.data.collapsed = !item.data.collapsed;
            this.render();
          }}
          onDropNode={({ startId, endId, targetPosition }) => {
            switch (targetPosition) {
              case "top":
                provider.insertBefore(endId, startId);
                this.render();
                break;
              case "bottom":
                provider.insertAfter(endId, startId);
                this.render();
                break;
              case "middle":
                provider.insertLast(endId, startId);
                this.render();
                break;
            }
          }}
          renderActions={(item) => {
            return [
              <Button quiet shape="square">
                I
              </Button>,
              <Button quiet shape="square">
                II
              </Button>,
            ];
          }}
          overscanRowCount={1}
        />
      </div>
    </VBox>
  );
}
