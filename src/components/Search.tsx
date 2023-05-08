import { useEffect, Suspense } from "react";
import { useMatch, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { IMovie, getSearch } from "../Util/apis";
import Modal from "./Modal";
import { SearchWrap, SearchName, NoResult, SearchList, SearchItem, SearchImg, SearchInfo } from "../style/SearchStyle";
import Loading from "./Loading";
import { movieImageName } from "../Util/util";
const Search = () => {
  const search = useParams().word || "";
  const { data, refetch } = useQuery<IMovie>(["search"], () => getSearch(search));
  const navigate = useNavigate();
  const modalMatch = useMatch(`/search/:word/:id`);
  const ModalLoad = (movieId: number) => {
    navigate(`/search/${search}/${movieId}`);
  };
  useEffect(() => {
    refetch();
  }, [search, refetch]);
  return (
    <SearchWrap>
      {data?.results.length !== 0 ? (
        <>
          <SearchName>"{search}"에 대한 검색 결과입니다.</SearchName>
          <Suspense fallback={<Loading></Loading>}>
            <SearchList>
              {data?.results
                .filter((v) => v.media_type !== "person")
                .map((searchItem) => {
                  return (
                    <SearchItem
                      onClick={() => ModalLoad(searchItem.id)}
                      key={searchItem.id}
                      whileHover={{ y: "-20px" }}
                      layoutId={searchItem.id.toString()}
                    >
                      <SearchImg bgphoto={movieImageName(searchItem?.backdrop_path)}></SearchImg>
                      <SearchInfo>
                        <h4>{searchItem?.name ? searchItem.name : searchItem.title}</h4>
                        <p>{searchItem.overview}</p>
                      </SearchInfo>
                    </SearchItem>
                  );
                })}
            </SearchList>
          </Suspense>
        </>
      ) : (
        <NoResult>"{search}"에 대한 검색 결과가 없습니다.</NoResult>
      )}
      {modalMatch && data !== undefined ? <Modal movieData={data.results} /> : null}
    </SearchWrap>
  );
};

export default Search;
