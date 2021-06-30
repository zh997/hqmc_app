export interface IGlobalHooksState {
    isShowTabbar: Ref<boolean>,
    tabbarIndex: Ref<number>
}

export interface IGlobalHooksDispatch {
    onShowTabbar: (val: boolean, index?: number) => void
}

export interface IGlobalHooks extends IGlobalHooksState,IGlobalHooksDispatch{};