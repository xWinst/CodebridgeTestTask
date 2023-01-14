import { FC } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Container } from "@mui/material";

const Loader: FC = () => {
    return (
        <Container
            sx={{
                display: "flex",
                justifyContent: "center",
            }}
        >
            <CircularProgress size={250} />
        </Container>
    );
};

export default Loader;
