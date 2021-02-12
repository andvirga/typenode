export type Animal = {
    name: string,
    class: Classification,
};

type Classification = 'mammal' | 'reptile' | 'bird' | 'fish' | 'others';