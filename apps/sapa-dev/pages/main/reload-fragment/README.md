# Use a fragment 

## as root element 

최초 mount 될 때는 DocumentFragment 로 감싸서 할 수 있는데 
이후 Reconcile 을 진행할 때는 어떻게 해야할지 모르겠다. 

Fragment 내 부는 항상 children의 개수가 변경될 수 있기 때문에 구조 예측이 잘 안된다. 

```jsx
function App() {
    return <>
        <div>Sample Fragment</div>
    </>
}

```

## as list element 

이 경우는 Reconcile 할 때 view  를 특정할 수가 없다.  그냥 다 풀어서 체크해야한다. 

```jsx
function App() {
    return <div>
        <>
            <div>item</div>
        </>
        <>
            <div>item</div>
            <div>view</div>
        </>
        <>
            <div>item</div>
            <div>aaaa</div>
        </>
    </div>
}
```

## as nest element 

이 경우는 App 에서 Sample 의 정보만 알고 있지 실제로 렌더링 된 결과물을 알고 있는게 아니기 때문에 
하위에 Fragment 가 존재하는지 알 수가 없다. 

그래서 최초 렌더링은 DocumentFragment 로 감싸서 하면 되는데 
그 이후 Reconcile 할 때 예측을 어떤 방식으로 해야할지 모르겠다. 

```jsx

function Sample() {
    return <>
        <div>Sample</div>
    </>
}

function App() {
    return <Sample />
}

```