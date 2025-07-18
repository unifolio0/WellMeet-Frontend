import React from 'react';
import { theme } from '../../styles/theme';

interface RestaurantCardProps {
  id: string;
  name: string;
  address: string;
  distance: string;
  rating: number;
  thumbnail: string;
  onClick?: () => void;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({
  name,
  address,
  distance,
  rating,
  thumbnail,
  onClick
}) => {
  return (
    <div className="hover-lift" style={styles.card} onClick={onClick}>
      <div style={styles.cardImage}>
        <img src={thumbnail} alt={name} style={styles.image} />
      </div>
      <div style={styles.cardInfo}>
        <div style={styles.cardTitle}>{name}</div>
        <div style={styles.cardDetail}>{address} • {distance} • ⭐ {rating}</div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: 'white',
    border: `1px solid ${theme.colors.border}`,
    borderRadius: theme.borderRadius.medium,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  },
  cardImage: {
    width: 60,
    height: 60,
    backgroundColor: theme.colors.inputBackground,
    borderRadius: theme.borderRadius.small,
    marginRight: theme.spacing.lg,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
  },
  cardInfo: {
    flex: 1,
  },
  cardTitle: {
    fontSize: theme.typography.fontSize.medium,
    fontWeight: theme.typography.fontWeight.semiBold,
    marginBottom: theme.spacing.xs,
    color: theme.colors.text,
  },
  cardDetail: {
    fontSize: theme.typography.fontSize.small,
    color: theme.colors.textSecondary,
    lineHeight: 1.4,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    borderRadius: theme.borderRadius.small,
  },
};