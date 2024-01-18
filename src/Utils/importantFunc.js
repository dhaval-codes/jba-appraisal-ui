export const GetJuniorRole = (e) => {
    if (e === 'HOD') {
        return 'Teachers'
    } else if (e === 'Co-ordinator') {
        return 'HODs'
    }
}