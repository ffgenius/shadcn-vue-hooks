export const useNavigation = async () => {
    const { data } = await useAsyncData('navigation', () => {
        return queryCollectionNavigation('content')
    }, {
        default: () => ([]),
        transform: (data) => {
            const doc = data.find(i => i.stem === 'docs')!

            return [
                {
                    ...doc,
                },
            ]
        },
    })

    return {
        data,
    }
}
