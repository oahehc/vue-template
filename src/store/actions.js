export async function actionLogin({
    commit,
}, {
    user,
    password,
}) {
    commit('mutationLoading', true);
    const result = await loginCheck(user, password);
    commit('mutationLoading', false);
    if (!result.Err.Code) {
        commit('mutationUser', user);
    }
    return result;
};
