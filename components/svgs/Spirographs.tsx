import { motion } from "framer-motion";
const draw = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: () => {
    return {
      opacity: 1,
      pathLength: 1,
      transition: {
        pathLength: { bounce: 0, duration: 5 },
      },
    };
  },
};

export default function Spirograph() {
  return (
    <motion.svg
      animate="visible"
      height={384}
      initial="hidden"
      viewBox="-512 -512 1024 1024"
      width={384}
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="m0 502 169.416-30.365 147.807-87.009L424.855 252.63 479.371 93.16l-4.194-166.106-60.519-151.588L307.614-343.09l-137.976-72.16-149.945-19.21-142.398 32.883-117.562 77.23-79.97 108.445L-355.9-92.525l8.819 121.426 47.429 104.472 75.522 76.404 90.443 42.368 91.771 7.85 81.188-22.198 62.005-44.127 38.457-56.026 14.902-57.879-4.935-51.348-18.547-39.295L106.2-36.01 81.484-48.126 61.84-50.873 49.534-49.21l-5.433 1.12-1.299-3.141-1.277-9.048-5.571-14.183-13.22-16.354L.39-104.911l-30.566-6.983-35.552 4.242-35.521 17.829-29.643 31.357-18.241 42.232-2.767 48.208 14.47 47.85 30.719 40.836 43.333 28.042 50.255 11.386 50.424-6.523 43.965-22.882 32.162-35.217 17.198-41.85 1.715-42.198-11.695-36.862-21.01-27.47-25.157-16.328-24.21-5.917-19.345 1.627-12.566 4.983-6.25 3.924-2.603-.61-3.14-6.71-8.293-11.896-17.24-13.679-27.982-10.142-37.698-.448-43.291 14.852-42.043 33.758-32.244 53.082-13.685 68.944L-204 140.003l41.968 75.582 71.455 61.605 95.563 35.824 109.543.596 109.766-39.827 94.46-79.852L382.93 80.563l21.88-134.71-27.314-139.627-76.848-126.05-119.649-94.582-149.216-48.53-160.655 6.443-151.502 63.103-122.197 113.675-76.11 151.003-19.113 169.647 41.24 166.723 96.82 142.376 140.1 99.788 165.292 44.718 169.172-15.346 151.549-72.298L381.626 288.29l65.644-148.41 9.811-158.332-44.554-147.896-90.293-119.508L200.43-363.83 64.623-393.51l-131.696 18.419-111.487 59.889-79.34 89.727-40.79 105.033-1.798 105.28 32.2 92.215 57.094 69.383 70.636 41.402 72.606 13.12L-3.3 189.75l49.813-28.573 31.837-37.581 14.443-38.526.648-33.14-7.725-24.098-10.261-14.4-7.896-6.728-2.586-2.916L68.176.158l7.064-8.3 7.208-15.319 2.83-22.435-5.71-27.284-16.976-27.92-28.755-23.258-38.532-13.33-44.018.69-43.628 16.697-36.839 32.057-24.307 44.114-7.78 50.715 10.225 50.63 26.9 43.793 39.657 31.326 46.637 15.323 47.026-1.564 41.219-16.617 30.695-27.587 17.72-33.115 4.863-32.965-5.52-28.052-11.777-20.21-13.294-11.785-10.61-5.109-5.305-1.976.368-3.22 3.976-8.483 3.483-16.246-2.242-24.098-13.069-29.225-27.513-29.027-42.908-21.717-55.84-6.83-62.792 14.514-60.845 39.642-48.343 64.649-25.378 85.016 6.028 96.38 42.061 95.357 77.613 80.244L-41.2 357.136l125.043 11.878 127.67-33.86L324.5 255.615l81.603-118.464L442.82-7.331l-16.207-152.967-70.18-141.637-117.695-111.017L86.895-477.44l-167.4-7.872-161.657 51.368-134.902 105.205-90.417 146.237-34.05 168.789 26.636 169.769 83.48 149.128 128.904 109.859 157.04 57.528L59.08 472l151.063-56.527L329.313 312.5l73.936-134.15 22.07-146.707-29.125-140.07-72.858-116.41-103.834-80.168-118.953-37.258-117.628 5.912-101.701 43.45-74.972 70.833-42.453 85.499-9.475 87.075 19.186 77.225 40.03 59.188 51.278 37.077 52.982 15.085 46.817-3.238L.207 120.286 22.825 99.25l10.998-20.316 3.06-15.251-.04-8.379 1.537-2.338 6.473.716 12.642-.437 17.648-5.855 19.36-14.455 16.415-24.265 8.508-32.874-3.503-37.959-17.772-37.787-31.82-31.607-43.026-19.836-49.17-4.003-48.86 13.52-41.847 29.963-29.067 42.682-12.489 49.665 5.26 49.908 21.386 43.604 33.47 32.085 39.9 17.56 40.176 2.656 34.975-10.083L43.012 97.44l15.49-22.299 5.968-20.993-.535-16.079-2.814-9.616-.785-3.995 4.475-1.38 10.935-3.19 16.04-9.72 17.273-19.984 12.755-31.819 1.742-42.261-15.067-48.115-35.508-46.612-56.21-36.067-73.14-16.346-82.305 10.897-80.54 42.319-66.19 73.32-39.577 98.728-3.17 113.663 38.65 114.412 80.128 99.167 115.01 68.501 137.505 25.453 143.263-24.774 130.171-75.5 98.812-119.537L467.914 45.34l-2.978-162.73-60.394-154.381-111.875-125.634-150.196-79.842-169.846-22.882-167.89 37.681-144.424 93.692-102.587 137.605-48.098 163.602 11.594 168.422 68.419 151.83 114.876 116.59 145.118 68.006L5.4 450.369l146.317-40.612 119.113-85.962 78.87-117.446 31.866-131.817-15.082-128.47-55.661-109.372-84.984-78.593-100.225-41.535-100.888-4.008-88.695 28.714-67.111 52.67-40.626 65.719-13.921 67.705 8.923 60.28 25.061 46.419 33.239 29.752 33.833 13.846 28.602 1.543 20.18-5.504 11.478-7.024 5.033-4.05 2.525 1.422 4.463 6.946 10.145 10.193 17.868 9.477 25.34 4.131 30.206-5.356L101.845 72 127.3 42.171l14.976-39.985.407-45.629-16.069-45.226-31.776-38.322-44.055-25.65L0-161.662l-50.783 9.02-44.055 25.65-31.776 38.322-16.069 45.226.407 45.629 14.976 39.985 25.455 29.83 30.576 17.436 30.206 5.356 25.34-4.131 17.868-9.477L12.29 70.992l4.463-6.946 2.525-1.423 5.033 4.05 11.477 7.025 20.181 5.504 28.602-1.543 33.833-13.846 33.239-29.752 25.061-46.418 8.923-60.28-13.921-67.706-40.626-65.72-67.11-52.67-88.696-28.713-100.888 4.008-100.225 41.535-84.984 78.593-55.66 109.372-15.083 128.47L-349.7 206.35l78.87 117.446 119.113 85.962L-5.4 450.369l155.767-13.07 145.118-68.006 114.876-116.59 68.419-151.83L490.374-67.55l-48.098-163.602L339.69-368.756l-144.424-93.692-167.89-37.68-169.846 22.881-150.196 79.842-111.875 125.634-60.394 154.382-2.978 162.729 52.526 150.273 98.812 119.536 130.17 75.5 143.264 24.775L94.363 389.97l115.01-68.5 80.129-99.168L328.15 107.89 324.981-5.772 285.404-104.5l-66.19-73.32-80.54-42.32-82.305-10.896-73.14 16.346-56.21 36.067-35.508 46.612-15.067 48.115 1.742 42.261 12.755 31.82 17.273 19.983 16.04 9.72 10.935 3.19 4.475 1.38-.785 3.995-2.814 9.616-.535 16.079 5.968 20.993 15.49 22.3 25.973 18.724 34.975 10.083 40.176-2.657 39.9-17.559 33.47-32.085 21.387-43.604 5.259-49.908-12.489-49.665-29.067-42.682-41.847-29.962-48.86-13.52-49.17 4.002-43.027 19.836L-98.15-99.95l-17.772 37.787-3.503 37.959 8.508 32.874 16.415 24.265 19.36 14.455 17.648 5.855 12.642.437 6.473-.716 1.537 2.338-.04 8.379 3.06 15.25 10.998 20.317 22.618 21.035 35.594 15.558 46.817 3.238 52.982-15.085 51.278-37.077 40.03-59.188 19.186-77.225-9.475-87.075-42.453-85.5L118.78-292.9 17.08-336.35l-117.628-5.912-118.953 37.258-103.834 80.168-72.858 116.41-29.125 140.07 22.07 146.706 73.936 134.15 119.17 102.972 151.065 56.527 164.548.572 157.04-57.528 128.905-109.859 83.48-149.128 26.637-169.769-34.051-168.789-90.417-146.237-134.902-105.205-161.658-51.368-167.399 7.872-151.843 64.488-117.694 111.017-70.181 141.637L-442.82-7.331l36.717 144.483 81.603 118.464 112.987 79.537 127.67 33.861L41.2 357.136l107.032-51.503 77.613-80.244 42.061-95.357 6.028-96.38-25.378-85.016-48.343-64.649-60.845-39.642-62.792-14.514-55.84 6.83-42.908 21.717-27.513 29.027-13.07 29.225-2.24 24.098 3.482 16.246 3.976 8.483.368 3.22-5.304 1.976-10.611 5.11-13.294 11.784-11.777 20.21-5.52 28.052 4.863 32.965 17.72 33.115 30.695 27.587 41.219 16.617 47.026 1.564 46.637-15.323 39.658-31.326 26.899-43.793 10.225-50.63-7.78-50.715-24.307-44.114-36.839-32.057-43.628-16.697-44.018-.69-38.532 13.33-28.755 23.258-16.976 27.92-5.71 27.284 2.83 22.435 7.208 15.319 7.064 8.3 3.202 3.63-2.586 2.915-7.896 6.728-10.261 14.4-7.725 24.098.648 33.14 14.443 38.526 31.837 37.581L3.299 189.75l64.653 11.21 72.606-13.121 70.636-41.402 57.095-69.383 32.199-92.215-1.799-105.28-40.79-105.033-79.34-89.727-111.486-59.889-131.696-18.42-135.807 29.681-121.804 77.973-90.293 119.508-44.554 147.896 9.811 158.332 65.644 148.41 115.248 118.607 151.55 72.298L54.342 494.54l165.292-44.718 140.1-99.788 96.82-142.376 41.24-166.723-19.113-169.647-76.11-151.003L280.375-393.39l-151.502-63.103-160.655-6.443-149.216 48.53-119.65 94.581-76.847 126.051-27.314 139.626 21.88 134.711 64.173 113.368 94.46 79.852 109.767 39.827 109.543-.596 95.563-35.824 71.455-61.605L204 140.003l12.111-77.477-13.685-68.944L170.182-59.5 128.14-93.258 84.848-108.11l-37.698.448L19.17-97.52 1.929-83.84l-8.295 11.895-3.14 6.71-2.602.61-6.25-3.924-12.566-4.983-19.346-1.627-24.21 5.917-25.156 16.328-21.01 27.47-11.695 36.862 1.715 42.198 17.198 41.85 32.162 35.217 43.965 22.882 50.424 6.523 50.255-11.386 43.333-28.042 30.72-40.836 14.469-47.85-2.767-48.208-18.241-42.232-29.643-31.357-35.521-17.829-35.552-4.242-30.566 6.983-22.343 14.094-13.221 16.354-5.571 14.183-1.277 9.048-1.3 3.141-5.432-1.12-12.307-1.662-19.643 2.747L-106.2-36.01l-24.955 25.132-18.547 39.295-4.935 51.348 14.902 57.88 38.457 56.025 62.005 44.127 81.188 22.199 91.771-7.851 90.443-42.368 75.522-76.404L347.081 28.9l8.818-121.426-35.661-123.377-79.97-108.446-117.563-77.23-142.398-32.883-149.945 19.21-137.976 72.16-107.044 118.557-60.52 151.588-4.193 166.106 54.516 159.469 107.632 131.997 147.807 87.01z"
        style={{
          fill: "none",
          stroke: "#5046E5",
          strokeWidth: 1,
        }}
        variants={draw}
      />
    </motion.svg>
  );
}