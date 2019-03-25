class FirstMenus extends React.Component {
    render() {
        const RouteWithSubRoutes = route => (
            <Route
                exact={route.isExact}
                path={`${match.url}/${route.path}`}
                render={props => <route.component {...props} routes={route.routes} />}
            />
        );
        const { match } = this.props;
        return (routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
            )));
    }
}

export default FirstMenus;