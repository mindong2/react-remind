# Typescript와 React로 만든 토이 프로젝트

# [myFlix](https://myflix-mindong.netlify.app/)

---

### 설명

인기 영화사이트 Netflix를 오마주한 프로젝트입니다.
기존에 사용해보지 않았던 react-query와 framer-motion, react-hook-form등 여러 라이브러리를 사용해볼수 있는 좋은 경험이었습니다.

깔끔한 스타일링과 모션에 신경을썼고, 특히 검색기능과 검색페이지에 신경을 썼습니다.
Branch: _master_

### 문제와 해결

#### 문제

1. Home.tsx와 TvShow.tsx 그리고 Search.tsx 세 페이지에서 Modal을 공통적으로 사용하여 컴포넌트화를 시키고 전달받은 API를 props로 각각 보냈으나 props내에 key값이 각각 다른것들이 존재하여 많은 타입오류를 겪었습니다.

####해결

interface내에 겹치지않는 key값들에 대한 타입을 ?:로 지정하여 없을수도 있다고 알려주었고, 컴포넌트 내에서는 삼항연산자를 통해 해결하였습니다.
예를들어, Home.tsx에서 불러온 데이터에는 제목이 'title'로 들어가있고, TvShow.tsx의에서 불러오는 데이터는 제목이 'name'으로 지정이 되어있어

```
{ data?.title ? data?.title : data?.name }
```

위와 같이 서로다른 부분에 작성 하였습니다.

####문제 2. router로 전달하는 검색어이기 때문인지 다른 페이지에서 검색을하면 괜찮았지만, 검색페이지 내에서 다시 검색을 하면 api 재호출을 하지 않아 리스트가 변경되지 않는 문제가 있었습니다.

####해결
react-query의 useQuery를 사용하였기에 검색어가 바뀌어도 useEffect를 사용한것처럼 검색어 변화에 반응하지 않은것이 이유라고 생각하여, 검색 후 useQuery에서 refetch라는 속성을 가져올수 있다는것을 알게되었습니다.

```
const search = useParams().word || "";
const { data, refetch } = useQuery<IMovie>(["search"], () => getSearch(search));

useEffect(() => {
  refetch();
}, [search, refetch]);
```

위 코드처럼 수정을 하여 Search 페이지 내에서 검색을해도 제대로 refetch하게 되어 문제를 해결했습니다.

## 미리보기

![netflix (1)](https://user-images.githubusercontent.com/73930706/236831141-28bdb726-2343-4b28-86f3-91f0edaab889.gif)
