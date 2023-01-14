import { FC } from "react";
import { Typography, TextField, InputAdornment } from "@mui/material";
import { setFilter } from "../redux/articlesReducer";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import Search from "../icons/Search";

const Filter: FC = () => {
    const filter = useAppSelector((state) => state.filter);
    const dispath = useAppDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispath(setFilter(e.target.value));
    };

    return (
        <>
            <Typography sx={{ lineHeight: 1.25, fontWeight: 600 }}>
                Filter by keywords
            </Typography>
            <TextField
                sx={{
                    width: "600px",
                    mt: "10px",
                    boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)",
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Search sx={{ fontSize: 20 }} />
                        </InputAdornment>
                    ),
                    sx: { height: "50px", pl: "20px", lineHeight: 1.5 },
                }}
                value={filter}
                onChange={handleChange}
            />
        </>
    );
};

export default Filter;
