const sortArray = (arr, sortType) => {
    switch (sortType) {
        case 'default':
            arr.sort((a, b) => b.id - a.id);
            break;
        case 'nameAscending':
            arr.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'nameDescending':
            arr.sort((a, b) => b.title.localeCompare(a.title));
            break;
        case 'priceAscending':
            arr.sort((a, b) => a.price - b.price);
            break;
        case 'priceDescending':
            arr.sort((a, b) => b.price - a.price);
            break;
        case 'ratingAscending':
            arr.sort((a, b) => a.rating.rate - b.rating.rate);
            break;
        case 'ratingDescending':
            arr.sort((a, b) => b.rating.rate - a.rating.rate);
            break;
        case 'reviewCountAscending':
            arr.sort((a, b) => a.rating.count - b.rating.count);
            break;
        case 'reviewCountDescending':
            arr.sort((a, b) => b.rating.count - a.rating.count);
            break;
        case 'categoryAscending':
            arr.sort((a, b) => a.category.localeCompare(b.category));
            break;
        case 'categoryDescending':
            arr.sort((a, b) => b.category.localeCompare(a.category));
            break;
        case 'newest':
            arr.sort((a, b) => b.id - a.id);
            break;
        case 'oldest':
            arr.sort((a, b) => a.id - b.id);
            break;
        default:
            break;
    }
    return [...arr];
};

export default sortArray;

