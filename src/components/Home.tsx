import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { getMovies, IMovie } from "../Util/apis";
import { movieImageName } from "../Util/util";

const HomeWrap = styled.div``;

const Loader = styled.div``;

const Banner = styled.div<{ bgPhoto: string }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)), url(${({ bgPhoto }) => bgPhoto});
    background-size: cover;
    height: 100vh;
    padding-left: 60px;
    color: #fff;
    p {
        line-height: 1.5;
    }
`;

const Title = styled.h2`
    font-size: 58px;
`;

const OverView = styled.p`
    width: 50%;
    margin-top: 30px;
    font-size: 30px;
`;

const Home = () => {
    const { isLoading, data } = useQuery<IMovie>(["movie", "nowPlaying"], getMovies);

    return (
        <HomeWrap>
            {isLoading ? (
                <Loader>Loading/...</Loader>
            ) : (
                <>
                    <Banner bgPhoto={movieImageName(data?.results[0].backdrop_path || "")}>
                        <Title>{data?.results[0].title}</Title>
                        <OverView>{data?.results[0].overview}</OverView>
                    </Banner>
                </>
            )}
        </HomeWrap>
    );
};

export default Home;
