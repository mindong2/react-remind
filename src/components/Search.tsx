import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSearch } from "../Util/apis";
import styled from "styled-components";
interface ISearchResult {
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: string;
  release_date: string;
  vote_average: number;
}

interface ISearch {
  page: number;
  results: ISearchResult[];
  total_pages: number;
  total_results: number;
}

const SearchWrap = styled.div`
  padding: 30px;
  padding-top: 150px;
  min-width: 100vh;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.black.veryDark};
  color: ${({ theme }) => theme.white.lighter};
`;

const SearchName = styled.h2`
  font-size: 38px;
  font-weight: bold;
`;

const NoResult = styled.h3`
  font-size: 38px;
  font-weight: bold;
`;

const SearchList = styled.ul`
  display: flex;
  margin-top: 50px;
  gap: 30px;
  flex-wrap: wrap;
`;

const SearchItem = styled.li`
  width: 32%;
  height: 500px;
  background-color: ${({ theme }) => theme.black.lighter};
  border-radius: 20px;
`;
const Search = () => {
  const search = useParams().word || "";
  const { data } = useQuery<ISearch>(["search"], () => getSearch(search));
  console.log(data);
  return (
    <SearchWrap>
      {data?.results.length !== 0 ? (
        <>
          <SearchName>"{search}"에 대한 검색 결과입니다.</SearchName>
          <SearchList>
            {data?.results.map((v) => {
              return <SearchItem key={v.id}>{v.title}</SearchItem>;
            })}
          </SearchList>
        </>
      ) : (
        <NoResult>"{search}"에 대한 검색 결과가 없습니다.</NoResult>
      )}
    </SearchWrap>
  );
};

export default Search;
