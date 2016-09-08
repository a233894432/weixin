
export const showView = (view="",belongto)=> {
    return {
        type: "SHOW_VIEW",
        view,
        belongto
    }
}