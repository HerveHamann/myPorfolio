import React from "react";
import comet from "../assets/img/comet.svg";
const Stack = () => {
  return (
    <section className="stack" data-scroll-section data-scroll data-scroll-repeat="true">
      <div className="container">
        <h2 className="appear" data-scroll data-scroll-repeat="true">
          Stack & Skills
        </h2>
        <div className="bubble" data-scroll data-scroll-repeat="true">
          <img className="meteora" src={comet} alt="comet" data-scroll data-scroll-repeat="true" />
          <div className="bubble-container" data-scroll data-scroll-repeat="true">
            <svg width="75px" height="75px" viewBox="0 0 128 128">
              <g fill="#ffc371">
                <circle cx="64" cy="64" r="11.4"></circle>
                <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
              </g>
            </svg>
            <svg width="75px" height="75px" viewBox="0 0 128 128">
              <path fill="none" d="M0 0h128v128H0z"></path>
              <path
                d="M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.73 39.73 0 01-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0010 81.1c-4.4 8.64-3.91 17.27 1.3 25.25 3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0026.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 01-2.61-6A9.12 9.12 0 0187.37 70h.34a9.15 9.15 0 011 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58-4.4 8.63-16 17.27-31.6 17.27a50.48 50.48 0 01-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.54 41.54 0 0016 3.42c10.1 0 17.75-4.72 22.31-13.35 2.93-5.7 3.1-12.38.33-19.22a43.61 43.61 0 00-17.27-20.85 62 62 0 00-34.74-10.59h-2.93a9.21 9.21 0 01-8 5.54h-.31a9.13 9.13 0 01-.3-18.25h.33a9 9 0 018 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48zm-82.75 23a7.31 7.31 0 011.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07-2.44-.81-6-2-8.14-2.44-.53-8.63-7.82-30.13-25.09-29.81-6.19.17-15.31 3.1-20 9.12a43.69 43.69 0 00-9.64 25.25 59.61 59.61 0 008.47 36.16 2.75 2.75 0 011.14-.16h.32a9.12 9.12 0 01.33 18.24h-.33a9.16 9.16 0 01-9.12-8.79z"
                fill="#ffc371"></path>
            </svg>
            <svg width="75px" height="75px" viewBox="0 0 128 128">
              <path
                fill="#ffc371"
                d="M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065C58.433 78.073 58.48 68 58.48 58h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"></path>
            </svg>
          </div>
        </div>
        <div className="bubble" data-scroll data-scroll-repeat="true">
          <img className="meteora" src={comet} alt="comet" data-scroll data-scroll-repeat="true" />
          <div className="bubble-container" data-scroll data-scroll-repeat="true">
            <svg width="75px" height="75px" viewBox="0 0 128 128">
              <path
                fill="#ffc371"
                d="M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387L118.968 2H9.032zm89.126 26.539l-.627 7.172L97.255 39H44.59l1.257 14h50.156l-.336 3.471-3.233 36.119-.238 2.27L64 102.609v.002l-.034.018-28.177-7.423L33.876 74h13.815l.979 10.919L63.957 89H64v-.546l15.355-3.875L80.959 67H33.261l-3.383-38.117L29.549 25h68.939l-.33 3.539z"></path>
            </svg>
            <svg width="75px" height="75px" viewBox="0 0 128 128">
              <path
                fill="#ffc371"
                d="M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626L119.24 1H8.76zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336L64 101.607v.001l-.022.019-28.311-7.888L33.75 72h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229L81.075 65H48.792l-.277-3.043-.631-7.129L47.553 51h34.749l1.264-14H30.64l-.277-3.041-.63-7.131L29.401 23h69.281l-.331 3.862z"></path>
            </svg>
            <svg width="75px" height="75px" viewBox="0 0 128 128">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#ffc371"
                d="M1.219 56.156c0 .703.207 1.167.323 1.618.756 2.933 2.381 5.45 4.309 7.746 2.746 3.272 6.109 5.906 9.554 8.383 2.988 2.148 6.037 4.248 9.037 6.38.515.366 1.002.787 1.561 1.236-.481.26-.881.489-1.297.7-3.959 2.008-7.768 4.259-11.279 6.986-2.116 1.644-4.162 3.391-5.607 5.674-2.325 3.672-3.148 7.584-1.415 11.761.506 1.22 1.278 2.274 2.367 3.053.353.252.749.502 1.162.6 1.058.249 2.136.412 3.207.609l3.033-.002c3.354-.299 6.407-1.448 9.166-3.352 4.312-2.976 7.217-6.966 8.466-12.087.908-3.722.945-7.448-.125-11.153a11.696 11.696 0 00-.354-1.014c-.13-.333-.283-.657-.463-1.072l6.876-3.954.103.088c-.125.409-.258.817-.371 1.23-.817 2.984-1.36 6.02-1.165 9.117.208 3.3 1.129 6.389 3.061 9.146 1.562 2.23 5.284 2.313 6.944.075.589-.795 1.16-1.626 1.589-2.513 1.121-2.315 2.159-4.671 3.23-7.011l.187-.428c-.077 1.108-.167 2.081-.208 3.055-.064 1.521.025 3.033.545 4.48.445 1.238 1.202 2.163 2.62 2.326.97.111 1.743-.333 2.456-.896a10.384 10.384 0 002.691-3.199c1.901-3.491 3.853-6.961 5.576-10.54 1.864-3.871 3.494-7.855 5.225-11.792l.286-.698c.409 1.607.694 3.181 1.219 4.671.61 1.729 1.365 3.417 2.187 5.058.389.775.344 1.278-.195 1.928-2.256 2.72-4.473 5.473-6.692 8.223-.491.607-.98 1.225-1.389 1.888a3.701 3.701 0 00-.48 1.364 1.737 1.737 0 001.383 1.971 9.661 9.661 0 002.708.193c3.097-.228 5.909-1.315 8.395-3.157 3.221-2.386 4.255-5.642 3.475-9.501-.211-1.047-.584-2.065-.947-3.074-.163-.455-.174-.774.123-1.198 2.575-3.677 4.775-7.578 6.821-11.569.081-.157.164-.314.306-.482.663 3.45 1.661 6.775 3.449 9.792-.912.879-1.815 1.676-2.632 2.554-1.799 1.934-3.359 4.034-4.173 6.595-.35 1.104-.619 2.226-.463 3.405.242 1.831 1.742 3.021 3.543 2.604 3.854-.892 7.181-2.708 9.612-5.925 1.636-2.166 1.785-4.582 1.1-7.113-.188-.688-.411-1.365-.651-2.154.951-.295 1.878-.649 2.837-.868 4.979-1.136 9.904-.938 14.702.86 2.801 1.05 5.064 2.807 6.406 5.571 1.639 3.379.733 6.585-2.452 8.721-.297.199-.637.356-.883.605a.869.869 0 00-.205.67c.021.123.346.277.533.275 1.047-.008 1.896-.557 2.711-1.121 2.042-1.413 3.532-3.314 3.853-5.817l.063-.188-.077-1.63c-.031-.094.023-.187.016-.258-.434-3.645-2.381-6.472-5.213-8.688-3.28-2.565-7.153-3.621-11.249-3.788a25.401 25.401 0 00-9.765 1.503c-.897.325-1.786.71-2.688 1.073-.121-.219-.251-.429-.358-.646-.926-1.896-2.048-3.708-2.296-5.882-.176-1.544-.392-3.086-.025-4.613.353-1.469.813-2.913 1.246-4.362.223-.746.066-1.164-.646-1.5a2.854 2.854 0 00-.786-.258c-1.75-.254-3.476-.109-5.171.384-.6.175-1.036.511-1.169 1.175-.076.381-.231.746-.339 1.122-.443 1.563-.757 3.156-1.473 4.645-1.794 3.735-3.842 7.329-5.938 10.897-.227.385-.466.763-.752 1.23-.736-1.54-1.521-2.922-1.759-4.542-.269-1.832-.481-3.661-.025-5.479.339-1.356.782-2.687 1.19-4.025.193-.636.104-.97-.472-1.305-.291-.169-.62-.319-.948-.368a11.643 11.643 0 00-5.354.438c-.543.176-.828.527-.994 1.087-.488 1.652-.904 3.344-1.589 4.915-2.774 6.36-5.628 12.687-8.479 19.013-.595 1.321-1.292 2.596-1.963 3.882-.17.326-.418.613-.63.919-.17-.201-.236-.339-.235-.477.005-.813-.092-1.65.063-2.436a172.189 172.189 0 011.578-7.099c.47-1.946 1.017-3.874 1.538-5.807.175-.647.178-1.252-.287-1.796-.781-.911-2.413-1.111-3.381-.409l-.428.242.083-.69c.204-1.479.245-2.953-.161-4.41-.506-1.816-1.802-2.861-3.686-2.803-.878.027-1.8.177-2.613.497-3.419 1.34-6.048 3.713-8.286 6.568a2.592 2.592 0 01-.757.654c-2.893 1.604-5.795 3.188-8.696 4.778l-3.229 1.769c-.866-.826-1.653-1.683-2.546-2.41-2.727-2.224-5.498-4.393-8.244-6.592-2.434-1.949-4.792-3.979-6.596-6.56-1.342-1.92-2.207-4.021-2.29-6.395-.105-3.025.753-5.789 2.293-8.362 1.97-3.292 4.657-5.934 7.611-8.327 3.125-2.53 6.505-4.678 10.008-6.639 4.901-2.743 9.942-5.171 15.347-6.774 5.542-1.644 11.165-2.585 16.965-1.929 2.28.258 4.494.78 6.527 1.895 1.557.853 2.834 1.97 3.428 3.716.586 1.718.568 3.459.162 5.204-.825 3.534-2.76 6.447-5.195 9.05-3.994 4.267-8.866 7.172-14.351 9.091a39.478 39.478 0 01-9.765 2.083c-2.729.229-5.401-.013-7.985-.962-1.711-.629-3.201-1.591-4.399-2.987-.214-.25-.488-.521-.887-.287-.391.23-.46.602-.329.979.219.626.421 1.278.762 1.838.857 1.405 2.107 2.424 3.483 3.298 2.643 1.681 5.597 2.246 8.66 2.377 4.648.201 9.183-.493 13.654-1.74 6.383-1.78 11.933-4.924 16.384-9.884 3.706-4.13 6.353-8.791 6.92-14.419.277-2.747-.018-5.438-1.304-7.944-1.395-2.715-3.613-4.734-6.265-6.125C68.756 18.179 64.588 17 60.286 17h-4.31c-5.21 0-10.247 1.493-15.143 3.274-3.706 1.349-7.34 2.941-10.868 4.703-7.683 3.839-14.838 8.468-20.715 14.833-2.928 3.171-5.407 6.67-6.833 10.79a40.494 40.494 0 00-1.111 3.746m27.839 36.013c-.333 4.459-2.354 8.074-5.657 11.002-1.858 1.646-3.989 2.818-6.471 3.23-.9.149-1.821.185-2.694-.188-1.245-.532-1.524-1.637-1.548-2.814-.037-1.876.62-3.572 1.521-5.186 1.176-2.104 2.9-3.708 4.741-5.206 2.9-2.361 6.046-4.359 9.268-6.245l.243-.1c.498 1.84.735 3.657.597 5.507zM54.303 70.98c-.235 1.424-.529 2.849-.945 4.229-1.438 4.777-3.285 9.406-5.282 13.973-.369.845-.906 1.616-1.373 2.417a1.689 1.689 0 01-.283.334c-.578.571-1.126.541-1.418-.206-.34-.868-.549-1.797-.729-2.716-.121-.617-.092-1.265-.13-1.897.039-4.494 1.41-8.578 3.736-12.38.959-1.568 2.003-3.062 3.598-4.054a6.27 6.27 0 011.595-.706c.85-.239 1.372.154 1.231 1.006zm17.164 21.868l6.169-7.203c.257 2.675-4.29 8.015-6.169 7.203zm19.703-4.847c-.436.25-.911.43-1.358.661-.409.212-.544-.002-.556-.354a2.385 2.385 0 01.093-.721c.833-2.938 2.366-5.446 4.647-7.486l.16-.082c1.085 3.035-.169 6.368-2.986 7.982z"></path>
            </svg>
          </div>
        </div>
        <div className="bubble" data-scroll data-scroll-repeat="true">
          {" "}
          <img className="meteora" src={comet} alt="comet" data-scroll data-scroll-repeat="true" />{" "}
          <div className="bubble-container" data-scroll data-scroll-repeat="true">
            <svg width="75px" height="75px" viewBox="0 0 128 128">
              <path
                fill="#ffc371"
                d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"></path>
            </svg>
            <svg width="75px" height="75px" viewBox="0 0 128 128">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#ffc371"
                d="M88.038 42.812c1.605 4.643 2.761 9.383 3.141 14.296.472 6.095.256 12.147-1.029 18.142-.035.165-.109.32-.164.48-.403.001-.814-.049-1.208.012-3.329.523-6.655 1.065-9.981 1.604-3.438.557-6.881 1.092-10.313 1.687-1.216.21-2.721-.041-3.212 1.641-.014.046-.154.054-.235.08l.166-10.051-.169-24.252 1.602-.275c2.62-.429 5.24-.864 7.862-1.281 3.129-.497 6.261-.98 9.392-1.465 1.381-.215 2.764-.412 4.148-.618z"></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#ffc371"
                d="M61.729 110.054c-1.69-1.453-3.439-2.842-5.059-4.37-8.717-8.222-15.093-17.899-18.233-29.566-.865-3.211-1.442-6.474-1.627-9.792-.13-2.322-.318-4.665-.154-6.975.437-6.144 1.325-12.229 3.127-18.147l.099-.138c.175.233.427.439.516.702 1.759 5.18 3.505 10.364 5.242 15.551 5.458 16.3 10.909 32.604 16.376 48.9.107.318.384.579.583.866l-.87 2.969z"></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#ffc371"
                d="M88.038 42.812c-1.384.206-2.768.403-4.149.616-3.131.485-6.263.968-9.392 1.465-2.622.417-5.242.852-7.862 1.281l-1.602.275-.012-1.045c-.053-.859-.144-1.717-.154-2.576-.069-5.478-.112-10.956-.18-16.434-.042-3.429-.105-6.857-.175-10.285-.043-2.13-.089-4.261-.185-6.388-.052-1.143-.236-2.28-.311-3.423-.042-.657.016-1.319.029-1.979.817 1.583 1.616 3.178 2.456 4.749 1.327 2.484 3.441 4.314 5.344 6.311 7.523 7.892 12.864 17.068 16.193 27.433z"></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#ffc371"
                d="M65.036 80.753c.081-.026.222-.034.235-.08.491-1.682 1.996-1.431 3.212-1.641 3.432-.594 6.875-1.13 10.313-1.687 3.326-.539 6.652-1.081 9.981-1.604.394-.062.805-.011 1.208-.012-.622 2.22-1.112 4.488-1.901 6.647-.896 2.449-1.98 4.839-3.131 7.182a49.142 49.142 0 01-6.353 9.763c-1.919 2.308-4.058 4.441-6.202 6.548-1.185 1.165-2.582 2.114-3.882 3.161l-.337-.23-1.214-1.038-1.256-2.753a41.402 41.402 0 01-1.394-9.838l.023-.561.171-2.426c.057-.828.133-1.655.168-2.485.129-2.982.241-5.964.359-8.946z"></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#ffc371"
                d="M65.036 80.753c-.118 2.982-.23 5.964-.357 8.947-.035.83-.111 1.657-.168 2.485l-.765.289c-1.699-5.002-3.399-9.951-5.062-14.913-2.75-8.209-5.467-16.431-8.213-24.642a4498.887 4498.887 0 00-6.7-19.867c-.105-.31-.407-.552-.617-.826l4.896-9.002c.168.292.39.565.496.879a6167.476 6167.476 0 016.768 20.118c2.916 8.73 5.814 17.467 8.728 26.198.116.349.308.671.491 1.062l.67-.78-.167 10.052z"></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#ffc371"
                d="M43.155 32.227c.21.274.511.516.617.826a4498.887 4498.887 0 016.7 19.867c2.746 8.211 5.463 16.433 8.213 24.642 1.662 4.961 3.362 9.911 5.062 14.913l.765-.289-.171 2.426-.155.559c-.266 2.656-.49 5.318-.814 7.968-.163 1.328-.509 2.632-.772 3.947-.198-.287-.476-.548-.583-.866-5.467-16.297-10.918-32.6-16.376-48.9a3888.972 3888.972 0 00-5.242-15.551c-.089-.263-.34-.469-.516-.702l3.272-8.84z"></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#ffc371"
                d="M65.202 70.702l-.67.78c-.183-.391-.375-.714-.491-1.062-2.913-8.731-5.812-17.468-8.728-26.198a6167.476 6167.476 0 00-6.768-20.118c-.105-.314-.327-.588-.496-.879l6.055-7.965c.191.255.463.482.562.769 1.681 4.921 3.347 9.848 5.003 14.778 1.547 4.604 3.071 9.215 4.636 13.813.105.308.47.526.714.786l.012 1.045c.058 8.082.115 16.167.171 24.251z"></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#ffc371"
                d="M65.021 45.404c-.244-.26-.609-.478-.714-.786-1.565-4.598-3.089-9.209-4.636-13.813-1.656-4.93-3.322-9.856-5.003-14.778-.099-.287-.371-.514-.562-.769 1.969-1.928 3.877-3.925 5.925-5.764 1.821-1.634 3.285-3.386 3.352-5.968.003-.107.059-.214.145-.514l.519 1.306c-.013.661-.072 1.322-.029 1.979.075 1.143.259 2.28.311 3.423.096 2.127.142 4.258.185 6.388.069 3.428.132 6.856.175 10.285.067 5.478.111 10.956.18 16.434.008.861.098 1.718.152 2.577z"></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#ffc371"
                d="M62.598 107.085c.263-1.315.609-2.62.772-3.947.325-2.649.548-5.312.814-7.968l.066-.01.066.011a41.402 41.402 0 001.394 9.838c-.176.232-.425.439-.518.701-.727 2.05-1.412 4.116-2.143 6.166-.1.28-.378.498-.574.744l-.747-2.566.87-2.969z"></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#ffc371"
                d="M62.476 112.621c.196-.246.475-.464.574-.744.731-2.05 1.417-4.115 2.143-6.166.093-.262.341-.469.518-.701l1.255 2.754c-.248.352-.59.669-.728 1.061l-2.404 7.059c-.099.283-.437.483-.663.722l-.695-3.985z"></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#ffc371"
                d="M63.171 116.605c.227-.238.564-.439.663-.722l2.404-7.059c.137-.391.48-.709.728-1.061l1.215 1.037c-.587.58-.913 1.25-.717 2.097l-.369 1.208c-.168.207-.411.387-.494.624-.839 2.403-1.64 4.819-2.485 7.222-.107.305-.404.544-.614.812-.109-1.387-.22-2.771-.331-4.158z"></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#ffc371"
                d="M63.503 120.763c.209-.269.506-.508.614-.812.845-2.402 1.646-4.818 2.485-7.222.083-.236.325-.417.494-.624l-.509 5.545c-.136.157-.333.294-.398.477-.575 1.614-1.117 3.24-1.694 4.854-.119.333-.347.627-.525.938-.158-.207-.441-.407-.454-.623-.051-.841-.016-1.688-.013-2.533z"></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#ffc371"
                d="M63.969 123.919c.178-.312.406-.606.525-.938.578-1.613 1.119-3.239 1.694-4.854.065-.183.263-.319.398-.477l.012 3.64-1.218 3.124-1.411-.495z"></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#ffc371"
                d="M65.38 124.415l1.218-3.124.251 3.696-1.469-.572z"></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#ffc371"
                d="M67.464 110.898c-.196-.847.129-1.518.717-2.097l.337.23-1.054 1.867z"></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#ffc371"
                d="M64.316 95.172l-.066-.011-.066.01.155-.559-.023.56z"></path>
            </svg>
            <svg width="75px" height="75px" viewBox="0 0 128 128">
              <path
                fill="#ffc371"
                d="M124.129 63.02c0-7.692-5.828-14.165-13.652-16.012L128 .113H41.16l17.563 47.043c-7.578 1.996-13.164 8.356-13.164 15.903 0 5.546 3.058 10.464 7.703 13.496-1.832 2.367-3.953 4.55-6.356 6.62-4.523 3.848-9.539 6.805-14.957 8.766-4.89-2.996-7.008-8.285-5.094-13.02 7.457-2.07 12.88-8.394 12.88-15.827 0-9.133-8.192-16.532-18.22-16.532-10.066 0-18.253 7.434-18.253 16.57 0 4.513 2.035 8.653 5.297 11.61-.286.52-.57 1.035-.856 1.59C4.973 81.438 1.875 87.207.691 93.68c-2.363 12.941 1.508 23.336 10.84 29.215 5.258 3.293 11.047 4.957 17.282 4.957 10.714 0 21.597-4.883 32.109-9.618 7.5-3.363 15.242-6.879 22.863-8.578 2.813-.629 5.746-1 8.844-1.406 6.273-.813 12.754-1.664 18.582-4.734 6.805-3.586 11.45-9.579 12.797-16.457 1.015-5.29 0-10.614-2.61-15.274a15.35 15.35 0 002.73-8.765zm-7.945 0c0 5.14-4.606 9.32-10.27 9.32s-10.27-4.18-10.27-9.32c0-1.665.489-3.254 1.344-4.622.325-.52.735-1.035 1.14-1.48a8.517 8.517 0 011.427-1.219l.043-.039c.324-.222.691-.445 1.058-.664 0 0 .04 0 .04-.039.163-.074.327-.184.492-.258.039 0 .078-.039.12-.039.165-.07.368-.144.57-.219a8.78 8.78 0 00.571-.222c.04 0 .082-.04.121-.04.164-.034.328-.109.489-.144.043 0 .125-.039.164-.039.203-.035.367-.074.57-.11h.043l.61-.113c.042 0 .12 0 .163-.035.164 0 .325-.039.489-.039h.203c.203 0 .41-.035.652-.035h.531c.16 0 .286 0 .446.035h.082c.328.04.652.074.98.149 4.645.886 8.192 4.66 8.192 9.172zM52.527 7.508h64.102l-14.711 39.387c-.61.113-1.223.296-1.832.48l-15.484-28.66L69.074 47.19c-.613-.183-1.265-.296-1.914-.406zM81.664 59.8c-.773-3.477-2.73-6.582-5.5-8.875l8.438-15.457 8.515 15.789c-2.527 2.293-4.36 5.215-5.094 8.543zM61.25 53.96c.203-.04.367-.074.57-.113h.121c.164-.035.329-.035.489-.075h.164c.164 0 .285-.035.449-.035h1.59c.16 0 .285.035.406.035.082 0 .121 0 .203.04.164.035.285.035.45.074.038 0 .081 0 .163.035.204.039.407.074.57.113h.04c.164.035.328.07.488.145.043 0 .082.039.164.039.121.035.285.074.406.148.043 0 .082.035.125.035.16.075.325.114.489.188h.039c.203.07.367.144.531.258h.04c.163.074.327.183.491.257.04 0 .04.04.078.04.164.07.286.183.45.257l.043.035c.488.333.937.704 1.382 1.075l.043.035c.407.406.813.851 1.141 1.332 1.059 1.48 1.672 3.219 1.672 5.105 0 5.141-4.606 9.317-10.27 9.317s-10.27-4.176-10.27-9.317c-.042-4.328 3.259-7.988 7.743-9.023zm-40.102-.262c5.665 0 10.27 4.18 10.27 9.32 0 5.141-4.605 9.32-10.27 9.32-5.664 0-10.27-4.179-10.27-9.32 0-5.14 4.606-9.32 10.27-9.32zm94.79 32.067c-.895 4.73-4.118 8.875-8.844 11.351-4.442 2.332-9.903 3.07-15.649 3.809-3.136.406-6.437.851-9.617 1.554-8.476 1.887-16.625 5.586-24.531 9.133-10.106 4.551-19.645 8.84-28.484 8.84-4.606 0-8.723-1.183-12.633-3.66-8.965-5.621-8.52-16.16-7.457-21.93.976-5.402 3.707-10.468 6.316-15.312.16-.297.285-.555.445-.852.899.297 1.836.52 2.813.668-1.547 7.84 2.851 15.938 11.41 19.934l1.55.738 1.669-.555c7.133-2.293 13.734-6.027 19.562-11.02 3.301-2.812 6.114-5.843 8.477-9.136.937.149 1.875.188 2.812.188 8.477 0 15.606-5.29 17.645-12.391h6.844c2.039 7.137 9.171 12.39 17.648 12.39 3.383 0 6.52-.85 9.207-2.292 1.063 2.773 1.387 5.656.817 8.543zm0 0"></path>
            </svg>
          </div>
        </div>

        <div className="bubble" data-scroll data-scroll-repeat="true">
          {" "}
          <img className="meteora" src={comet} alt="comet" data-scroll data-scroll-repeat="true" />{" "}
          <div className="bubble-container" data-scroll data-scroll-repeat="true">
            <ul>
              <li>Recharts.js</li>
              <li>Particles.js</li>
              <li>Locomotive.js</li>
            </ul>
          </div>
        </div>
        <div className="bubble" data-scroll data-scroll-repeat="true">
          <img className="meteora" src={comet} alt="comet" data-scroll data-scroll-repeat="true" />{" "}
          <div className="bubble-container" data-scroll data-scroll-repeat="true">
            <span>Future interest</span>
            <svg width="75px" height="75px" viewBox="0 0 128 128">
              <g>
                <path
                  fill="#ffc371"
                  d="M16.219 15.762a1.129 1.129 0 00-1.076 1.399l24.394 98.742a1.129 1.129 0 001.879.544l73.386-70.59a1.129 1.129 0 00-.47-1.899L16.55 15.806a1.129 1.129 0 00-.331-.044zm1.584 2.754l94.024 27.07-70.566 67.877-23.458-94.947z"
                  overflow="visible"></path>
                <path
                  fill="#ffc371"
                  d="M65.137 29.84a1.129 1.129 0 00-.807.315L27.654 65.46a1.129 1.129 0 00.471 1.898L76.984 81.44a1.129 1.129 0 001.409-1.355L66.21 30.698a1.129 1.129 0 00-1.073-.858zm-.651 3.3L75.734 78.73l-45.104-13L64.486 33.14z"
                  overflow="visible"></path>
                <path
                  fill="#ffc371"
                  d="M46.914 47.313a1.129 1.129 0 00-1.076 1.399l6.054 24.531a1.129 1.129 0 001.88.543l18.222-17.563a1.129 1.129 0 00-.472-1.898l-24.277-6.968a1.129 1.129 0 00-.331-.044zm1.583 2.751l20.522 5.89L53.614 70.8l-5.117-20.736z"
                  overflow="visible"></path>
                <path
                  fill="#ffc371"
                  d="M40.902 22.809a1.129 1.129 0 00-.807.316L21.873 40.687a1.129 1.129 0 00.472 1.898l24.273 6.969a1.129 1.129 0 001.408-1.356l-6.051-24.53a1.129 1.129 0 00-1.073-.86zm-.65 3.3l5.114 20.736-20.517-5.89 15.403-14.847zM89.453 36.793a1.129 1.129 0 00-.806.316L70.423 54.67a1.129 1.129 0 00.472 1.899l24.274 6.968a1.129 1.129 0 001.408-1.356l-6.05-24.53a1.129 1.129 0 00-1.074-.859zm-.65 3.3l5.114 20.737L73.4 54.94l15.403-14.846zM52.944 71.864a1.129 1.129 0 00-.74.315L33.982 89.742a1.129 1.129 0 00.472 1.898l24.278 6.968a1.129 1.129 0 001.407-1.355l-6.055-24.531a1.129 1.129 0 00-1.14-.858zm-.582 3.3l5.118 20.737-20.522-5.89 15.404-14.846z"
                  overflow="visible"></path>
              </g>
            </svg>
            <svg width="75px" height="75px" viewBox="0 0 128 128">
              <linearGradient
                id="python-original-a"
                gradientUnits="userSpaceOnUse"
                x1="70.252"
                y1="1237.476"
                x2="170.659"
                y2="1151.089"
                gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
                <stop offset="0" stopColor="#ffc371"></stop>
                <stop offset="1" stopColor="#ffc371"></stop>
              </linearGradient>
              <linearGradient
                id="python-original-b"
                gradientUnits="userSpaceOnUse"
                x1="209.474"
                y1="1098.811"
                x2="173.62"
                y2="1149.537"
                gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
                <stop offset="0" stopColor="#ffc371"></stop>
                <stop offset="1" stopColor="#ffc371"></stop>
              </linearGradient>
              <path
                fill="url(#python-original-a)"
                d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"
                transform="translate(0 10.26)"></path>
              <path
                fill="url(#python-original-b)"
                d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"
                transform="translate(0 10.26)"></path>
              <radialGradient
                id="python-original-c"
                cx="1825.678"
                cy="444.45"
                r="26.743"
                gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)"
                gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#B8B8B8" stopOpacity=".498"></stop>
                <stop offset="1" stopColor="#7F7F7F" stopOpacity="0"></stop>
              </radialGradient>
              <path
                opacity=".444"
                fill="url(#python-original-c)"
                d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"></path>
            </svg>
          </div>
        </div>
        <div className="bubble" data-scroll data-scroll-repeat="true">
          {" "}
          <img className="meteora" src={comet} alt="comet" data-scroll data-scroll-repeat="true" />{" "}
          <div className="bubble-container" data-scroll data-scroll-repeat="true">
            <svg width="75px" height="75px" viewBox="0 0 128 128">
              <path
                d="M3.656 45.043s-3.027-2.191.61-5.113l8.468-7.594s2.426-2.559 4.989-.328l78.175 59.328v28.45s-.039 4.468-5.757 3.976zm0 0"
                fill="#ffc371"></path>
              <path
                d="M23.809 63.379L3.656 81.742s-2.07 1.543 0 4.305l9.356 8.527s2.222 2.395 5.508-.328l21.359-16.238zm0 0"
                fill="#ffc371"></path>
              <path
                d="M59.184 63.531l36.953-28.285-.239-28.297S94.32.773 89.055 3.99L39.879 48.851zm0 0"
                fill="#ffc371"></path>
              <path
                d="M90.14 123.797c2.145 2.203 4.747 1.48 4.747 1.48l28.797-14.222c3.687-2.52 3.171-5.645 3.171-5.645V20.465c0-3.735-3.812-5.024-3.812-5.024L98.082 3.38c-5.453-3.379-9.027.61-9.027.61s4.593-3.317 6.843 2.96v112.317c0 .773-.164 1.53-.492 2.214-.656 1.332-2.086 2.57-5.504 2.051zm0 0"
                fill="#ffc371"></path>
            </svg>
            <svg width="75px" height="75px" viewBox="0 0 128 128">
              <g fill="#ffc371">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path>
                <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
              </g>
            </svg>
            <svg width="75px" height="75px" viewBox="0 0 128 128">
              <path
                fill="#ffc371"
                d="M2 38.5h124v43.71H64v7.29H36.44v-7.29H2zm6.89 36.43h13.78V53.07h6.89v21.86h6.89V45.79H8.89zm34.44-29.14v36.42h13.78v-7.28h13.78V45.79zm13.78 7.29H64v14.56h-6.89zm20.67-7.29v29.14h13.78V53.07h6.89v21.86h6.89V53.07h6.89v21.86h6.89V45.79z"></path>
            </svg>
          </div>
        </div>
        <div className="bubble" data-scroll data-scroll-repeat="true">
          <img className="meteora" src={comet} alt="comet" data-scroll data-scroll-repeat="true" />{" "}
          <div className="bubble-container" data-scroll data-scroll-repeat="true">
            <svg width="75px" height="75px" viewBox="0 0 128 128">
              <path
                fill="#ffc371"
                d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"></path>
              <path fill="#ffc371" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"></path>
              <path fill="#ffc371" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"></path>
              <path fill="#ffc371" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"></path>
              <path
                fill="#ffc371"
                d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"></path>
            </svg>
            <svg width="75px" height="75px" viewBox="0 0 128 128">
              <path
                fill="#ffc371"
                d="M127 16.142C127 7.779 120.221 1 111.858 1H16.142C7.779 1 1 7.779 1 16.142v95.715C1 120.221 7.779 127 16.142 127h95.716c8.363 0 15.142-6.779 15.142-15.143V16.142zM58 99.54c0 3.807-3.286 6.46-7.093 6.46H23.563C19.756 106 17 103.347 17 99.54V23.23c0-3.808 2.756-7.23 6.563-7.23h27.344C54.714 16 58 19.422 58 23.23v76.31zm55-66.456V64.97c0 3.807-2.936 7.03-6.744 7.03h-27.33C75.118 72 72 68.776 72 64.97V22.866C72 19.058 75.118 16 78.926 16h27.33c3.808 0 6.744 3.058 6.744 6.866v10.218z"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
