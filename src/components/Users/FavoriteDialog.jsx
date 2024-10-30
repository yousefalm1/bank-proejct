'use client';
import { useGlobalState } from '@/app/context/GlobalStateContext';
import { Star } from 'lucide-react';

import { Button } from '@/components/ui/button';

const FavoriteDialog = ({ user }) => {
  const { addToFavorites, isFavorite, removeFromFavorites } = useGlobalState();

  return (
    <Button
      variant="outline"
      onClick={() => {
        if (isFavorite(user)) {
          removeFromFavorites(user);
        } else {
          addToFavorites(user);
        }
      }}
    >
      <Star
        className="h-4 w-4"
        fill={isFavorite(user) ? 'gold' : 'none'}
        stroke={isFavorite(user) ? 'gold' : 'currentColor'}
      />{' '}
    </Button>
  );
};

export default FavoriteDialog;
