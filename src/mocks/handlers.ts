import friends from './friends-handler';
import features from './feature-handler';
import books from './books-handler';

export const handlers = [...friends, ...features, ...books];
