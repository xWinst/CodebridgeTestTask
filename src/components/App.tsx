import { FC, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Loader } from ".";
import { getLastArticles } from "../redux/articlesOperations";
import { useAppDispatch } from "../hooks/reduxHooks";
import { Homepage, ArticlePage, PageNotFound } from "../pages";

const App: FC = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getLastArticles());
    }, [dispatch]);
    return (
        <>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route
                        path="article/:articleId/"
                        element={<ArticlePage />}
                    />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Suspense>
        </>
    );
};

export default App;
