import * as React from 'react';
import {useMemo} from "react";
import {isRouteErrorResponse, useNavigate, useRouteError} from "react-router-dom";
import {Button, Typography} from "@mui/material";

const errorMemos: string[] = [
    "hmm... that isn't right.",
    "oops!",
    "something went wrong",
    "uh oh",
    "😳😳😳"
]

const DisplayError: React.FC = () => {

    const errorMemo = useMemo( () => errorMemos[Math.floor(Math.random() * errorMemos.length )], [])

    const navigate = useNavigate();
    const error = useRouteError();

    let errorMessage: string;

    if ( isRouteErrorResponse(error) ) {
        errorMessage = `${error.status}: ${error.statusText}`;
    } else if ( error instanceof Error ) {
        errorMessage = error.message;
    } else if ( typeof error === 'string' ) {
        errorMessage = error;
    } else {
        errorMessage = 'unknown error';
    }

    console.log(errorMessage);

    return(
        <div className="super-center flex flex-col items-center w-[50%] max-w-6xl">
            <Typography variant="h3" className="w-fit mb-10">{errorMemo}</Typography>
            <Typography
                variant="body1"
                className="
                    w-full p-4
                    text-left italic
                    bg-red-400
                    rounded-md
                "
            >
                {errorMessage}
            </Typography>
            <Button
                variant="contained"
                disableElevation
                className="mt-10 w-[50%] h-12 mx-auto text-[18px] lowercase"
                onClick={() => navigate("/")}
            >
                go home
            </Button>
        </div>
    )
}

export default DisplayError;