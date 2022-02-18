import React from "react";

export const WithNumberGenerator = WrappedComponent => props => {
    const randomNum = Math.floor(Math.random() * 100);

    return <WrappedComponent {...props} data={randomNum} />
}
//Could change to data and put logic for API call. You could get comments, blog, thumbnails etc.
//Could also do this with sports teams list of players for example
