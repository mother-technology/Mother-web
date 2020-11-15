import React, { FunctionComponent, useEffect } from "react";
import { Route, RouteProps } from "react-router-dom";

interface IPageProps extends RouteProps {
    title: string;
    description: string;
}

const Page: FunctionComponent<IPageProps> = (props) => {
    const { title, description, ...rest } = props;
    useEffect(() => {
        document.title = title;
    });

    return <Route {...rest} />;
};

export default Page;
