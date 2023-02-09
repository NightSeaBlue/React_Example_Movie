import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import axios from "axios";
import Movie from "./movie";

class App extends Component {
    state = {
        isLoading: true,
        movies: [],
    }; //js 에서 이미 정해져있는 객체임. 상태 표시 객체

    // 마운트
    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({ isLoading: false });
        // }, 2000);
        this.getMovies();
    }

    getMovies = async () => {
        const {
            data: {
                data: { movies },
            },
        } = await axios.get("https://yts.mx/api/v2/list_movies.json");
        console.log(movies);

        this.setState({ movies: movies, isLoading: false });
    };

    render() {
        const { isLoading, movies } = this.state;
        return (
            <div className="App-header">
                {isLoading
                    ? "로딩 중..."
                    : movies.map((movie) => {
                          return (
                              <Movie
                                  id={movie.id}
                                  year={movie.year}
                                  title={movie.title}
                                  summary={movie.summary}
                                  poster={movie.medium_cover_image}
                              />
                          );
                      })}
            </div>
        );
    }
}

export default App;
