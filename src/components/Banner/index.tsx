import "./styles.scss";
import checkIcon from "../../assets/check-solid.svg";
import coinsIcon from "../../assets/coins-currency.png";
import type { BannerProps } from "./types";
import { BANNER_FEATURES } from "./types";
import { BANNER_CONTENT } from "./constants";

export default function Banner({
  className = "",
  onApplyClick,
  isLoading = false,
  isDisabled = false,
}: BannerProps) {
  const handleApplyClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onApplyClick?.();
  };

  return (
    <div className={`banner ${className}`.trim()}>
      <div className="banner-content">
        <div className="banner-main">
          <p className="banner-description">{BANNER_CONTENT.description}</p>
          <ul className="banner-features" role="list">
            {BANNER_FEATURES.map((feature, index) => (
              <li key={index}>
                <img
                  src={checkIcon}
                  alt="Check"
                  className="check-icon"
                  aria-hidden="true"
                />
                <span>{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="banner-actions">
          <button
            className={`banner-button ${
              isLoading ? "banner-button--loading" : ""
            }`}
            type="button"
            onClick={handleApplyClick}
            disabled={isDisabled || isLoading}
            aria-busy={isLoading}
          >
            {isLoading ? "Processing..." : BANNER_CONTENT.applyButton}
          </button>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://finom.co"
            className="banner-link"
          >
            {BANNER_CONTENT.moreInfo}
          </a>
        </div>
        <img
          src={coinsIcon}
          alt=""
          className="banner-coins"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
