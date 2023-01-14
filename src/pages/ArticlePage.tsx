import { FC, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { useAppSelector } from "../hooks/reduxHooks";
import ArrowRight from "../icons/ArrowRight";

const ArticlePage: FC = () => {
    const { articleId } = useParams();
    const articles = useAppSelector((state) => state.list);
    const article = articles.find(
        (article) => article.id === Number(articleId)
    );
    const navigate = useNavigate();

    useEffect(() => {
        if (!article) navigate("/notFound");
    }, [article, navigate]);

    return (
        <>
            <img
                className="image"
                src={article?.imageUrl}
                alt="article poster"
                height="245px"
            />
            <Box
                sx={{
                    mx: "75px",
                    px: "75px",
                    pt: "35px",
                    pb: "50px",
                    transform: "translateY(-95px)",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #EAEAEA",
                    boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)",
                    borderRadius: "5px",
                }}
            >
                <Typography
                    sx={{
                        mt: "35px",
                        fontSize: 24,
                        ineHeight: 1.21,
                        textAlign: "center",
                    }}
                >
                    {article?.title}
                </Typography>
                <Typography paragraph sx={{ mt: "50px", fontSize: 18 }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod in laboriosam quisquam amet, esse ipsum, incidunt odio
                    nemo qui id quaerat ab laudantium? Similique cupiditate aut
                    veniam ullam nostrum quas esse accusamus, blanditiis, nisi
                    necessitatibus vitae obcaecati quidem dolor voluptas
                    quisquam sed consequuntur dolorem nulla nam eveniet? Ab qui
                    molestias blanditiis esse alias perferendis labore corporis
                    nesciunt cum aliquid praesentium maiores voluptatibus,
                    dolores delectus amet odio sit doloribus iure dolor.
                </Typography>
                <Typography paragraph sx={{ fontSize: 18 }}>
                    Consectetur eaque in dicta sunt dolorem iste nihil molestiae
                    tempore, ut qui totam, expedita dolore eveniet eum optio
                    delectus quidem consequuntur veritatis, ipsum rem ipsam
                    odit. Maiores cumque dignissimos et ipsum ad aut consequatur
                    facilis tenetur magnam dolorum placeat perferendis numquam
                    quasi, tempore praesentium fugit accusamus iste. Consectetur
                    sapiente laudantium blanditiis distinctio est facilis
                    tempore, itaque officia iusto architecto quo fugit libero
                    laborum a deserunt quia natus nobis? Iste, quod.
                </Typography>
                <Typography paragraph sx={{ fontSize: 18 }}>
                    Perferendis, consequatur quis reiciendis nemo illo adipisci
                    libero eum sit quibusdam ullam ab recusandae voluptas atque
                    velit magni facilis saepe, eos deleniti. Ratione
                    necessitatibus itaque, amet cum impedit nulla accusantium
                    illum libero porro ullam expedita autem similique magnam
                    beatae deserunt hic voluptatibus quaerat veritatis? Magni
                    aperiam inventore, cupiditate voluptatum quia rem aspernatur
                    quo similique eum, numquam consequuntur molestiae labore
                    asperiores. Et dolores ex eum impedit illum aperiam
                    asperiores sed recusandae?
                </Typography>
                <Typography sx={{ fontSize: 18 }}>
                    Voluptates tempore necessitatibus repudiandae eum maxime eos
                    magnam porro in odio amet vel placeat molestiae aspernatur
                    dolore, fugit cupiditate totam natus suscipit pariatur,
                    accusamus perferendis, a odit. Accusamus error impedit quod
                    ullam tempora incidunt dolores et, distinctio debitis enim
                    beatae reiciendis, molestias autem iure magnam sint soluta
                    fugit corporis. Qui nisi minus est sequi asperiores
                    deleniti, aliquam odio consequatur beatae saepe similique ut
                    in rem non natus dolorum nostrum. Molestiae.
                </Typography>
            </Box>
            <Button
                onClick={() => navigate("/")}
                startIcon={
                    <ArrowRight
                        sx={{
                            width: 12,
                            transform: "matrix(-1, 0, 0, 1, 0, 0)",
                        }}
                    />
                }
                sx={{
                    mt: "-60px",
                    mb: "45px",
                    ml: "150px",
                    textTransform: "none",
                    fontWeight: 700,
                    color: "inherit",
                }}
            >
                Back to homepage
            </Button>
        </>
    );
};

export default ArticlePage;
