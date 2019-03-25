{
    "path": "index",
    "component": Loadable({
        "loader": () =>
            import("~/container/FirstMenus/Index/index"),
        "loading": MyLoadingComponent
    }),
    "isExact":true
}