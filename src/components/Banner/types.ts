export interface BannerProps {
  /** Optional class name for the banner root element */
  className?: string;
  /** Callback function called when Apply Now button is clicked */
  onApplyClick?: () => void;
  /** Optional loading state for the Apply Now button */
  isLoading?: boolean;
  /** Optional disabled state for the Apply Now button */
  isDisabled?: boolean;
}

export interface BannerFeature {
  /** Text for the feature */
  text: string;
  /** Optional icon to display next to the feature */
  icon?: string;
}

/** List of banner features */
export const BANNER_FEATURES: BannerFeature[] = [
  { text: 'Fast approval process' },
  { text: 'Flexible repayment terms' },
  { text: 'Competitive interest rates' },
];