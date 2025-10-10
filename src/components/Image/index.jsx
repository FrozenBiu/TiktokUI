import { forwardRef, useState } from "react";
import noImage from "../../assets/Image/No-image.png";

const Image = forwardRef(
  ({ src, alt, fallback: customFallback = noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState("");

    const handleError = () => {
      setFallback(customFallback);
    };

    return (
      <img
        ref={ref}
        src={fallback || src}
        alt={alt}
        {...props}
        onError={handleError}
      />
    );
  }
);

export default Image;
