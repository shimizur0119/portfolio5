type Props = {
  className?: string
}

export default function SvgLogo({ className }: Props) {
  return (
    <svg
      className={className}
      fill="none"
      height="500"
      viewBox="0 0 500 500"
      width="500"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M23 23H477V477H23V23Z" stroke="white" strokeWidth="46" />
      <path
        d="M45.064 308V204.32H65.928C72.84 204.32 78.5573 205.259 83.08 207.136C87.6027 208.928 90.9307 211.872 93.064 215.968C95.2827 219.979 96.392 225.269 96.392 231.84C96.392 235.851 95.9653 239.52 95.112 242.848C94.2587 246.091 92.8933 248.864 91.016 251.168C89.1387 253.387 86.664 255.008 83.592 256.032L98.312 308H84.36L70.792 259.36H59.528V308H45.064ZM59.528 248.992H65.032C69.128 248.992 72.456 248.48 75.016 247.456C77.576 246.432 79.4533 244.683 80.648 242.208C81.8427 239.733 82.44 236.277 82.44 231.84C82.44 225.781 81.3307 221.429 79.112 218.784C76.8933 216.053 72.4987 214.688 65.928 214.688H59.528V248.992ZM109.135 326.56V316.064C112.463 316.064 115.108 315.893 117.071 315.552C119.034 315.296 120.442 314.741 121.295 313.888C122.148 313.12 122.575 312.011 122.575 310.56C122.575 309.792 122.276 308.085 121.679 305.44C121.082 302.795 120.442 299.979 119.759 296.992L104.911 234.016H118.735L128.719 289.312L138.319 234.016H152.143L134.479 312.096C133.711 315.68 132.303 318.496 130.255 320.544C128.207 322.677 125.562 324.213 122.319 325.152C119.162 326.091 115.322 326.56 110.799 326.56H109.135ZM180.764 309.024C175.303 309.024 170.993 307.915 167.836 305.696C164.679 303.477 162.417 300.32 161.052 296.224C159.772 292.128 159.132 287.307 159.132 281.76V260.256C159.132 254.709 159.772 249.888 161.052 245.792C162.417 241.696 164.679 238.539 167.836 236.32C170.993 234.101 175.303 232.992 180.764 232.992C186.225 232.992 190.492 234.101 193.564 236.32C196.721 238.539 198.94 241.696 200.22 245.792C201.585 249.888 202.268 254.709 202.268 260.256V281.76C202.268 287.307 201.585 292.128 200.22 296.224C198.94 300.32 196.721 303.477 193.564 305.696C190.492 307.915 186.225 309.024 180.764 309.024ZM180.764 298.912C183.409 298.912 185.244 298.144 186.268 296.608C187.377 295.072 188.017 293.067 188.188 290.592C188.444 288.032 188.572 285.387 188.572 282.656V259.488C188.572 256.672 188.444 254.027 188.188 251.552C188.017 249.077 187.377 247.072 186.268 245.536C185.244 243.915 183.409 243.104 180.764 243.104C178.119 243.104 176.241 243.915 175.132 245.536C174.023 247.072 173.34 249.077 173.084 251.552C172.913 254.027 172.828 256.672 172.828 259.488V282.656C172.828 285.387 172.913 288.032 173.084 290.592C173.34 293.067 174.023 295.072 175.132 296.608C176.241 298.144 178.119 298.912 180.764 298.912ZM234.499 309.024C230.659 309.024 227.544 308.299 225.155 306.848C222.851 305.397 221.144 303.349 220.035 300.704C219.011 298.059 218.499 294.944 218.499 291.36V243.104H210.691V234.016H218.499V212.384H232.195V234.016H244.099V243.104H232.195V290.464C232.195 293.365 232.664 295.456 233.603 296.736C234.542 297.931 236.334 298.528 238.979 298.528C239.662 298.528 240.43 298.485 241.283 298.4C242.222 298.315 243.118 298.229 243.971 298.144V308.256C242.264 308.512 240.686 308.683 239.235 308.768C237.784 308.939 236.206 309.024 234.499 309.024ZM267.474 309.024C264.573 309.024 262.013 308.213 259.794 306.592C257.575 304.885 255.826 302.752 254.546 300.192C253.266 297.547 252.626 294.773 252.626 291.872C252.626 287.264 253.394 283.381 254.93 280.224C256.466 277.067 258.557 274.421 261.202 272.288C263.933 270.069 267.047 268.149 270.546 266.528C274.13 264.907 277.885 263.328 281.81 261.792V256.544C281.81 253.557 281.639 251.083 281.298 249.12C280.957 247.157 280.231 245.707 279.122 244.768C278.098 243.744 276.519 243.232 274.386 243.232C272.509 243.232 270.973 243.659 269.778 244.512C268.669 245.365 267.858 246.603 267.346 248.224C266.834 249.76 266.578 251.595 266.578 253.728V257.44L253.01 256.928C253.181 248.736 255.058 242.72 258.642 238.88C262.226 234.955 267.773 232.992 275.282 232.992C282.621 232.992 287.826 234.997 290.898 239.008C293.97 243.019 295.506 248.821 295.506 256.416V290.208C295.506 292.512 295.549 294.731 295.634 296.864C295.805 298.997 295.975 301.003 296.146 302.88C296.402 304.672 296.615 306.379 296.786 308H284.242C283.986 306.635 283.645 304.928 283.218 302.88C282.877 300.747 282.621 298.827 282.45 297.12C281.597 300.021 279.933 302.752 277.458 305.312C275.069 307.787 271.741 309.024 267.474 309.024ZM272.85 297.248C274.215 297.248 275.495 296.864 276.69 296.096C277.885 295.328 278.951 294.475 279.89 293.536C280.829 292.512 281.469 291.701 281.81 291.104V270.112C279.677 271.307 277.671 272.501 275.794 273.696C273.917 274.891 272.253 276.171 270.802 277.536C269.437 278.816 268.327 280.309 267.474 282.016C266.706 283.637 266.322 285.515 266.322 287.648C266.322 290.635 266.877 292.981 267.986 294.688C269.095 296.395 270.717 297.248 272.85 297.248ZM69.512 455.152C63.5387 455.152 58.5467 453.872 54.536 451.312C50.6107 448.752 47.624 445.211 45.576 440.688C43.528 436.165 42.3333 430.917 41.992 424.944L54.792 421.488C55.048 425.157 55.6027 428.699 56.456 432.112C57.3947 435.525 58.888 438.341 60.936 440.56C62.984 442.693 65.8427 443.76 69.512 443.76C73.2667 443.76 76.0827 442.736 77.96 440.688C79.9227 438.555 80.904 435.525 80.904 431.6C80.904 426.907 79.8373 423.152 77.704 420.336C75.5707 417.435 72.8827 414.533 69.64 411.632L52.232 396.272C48.8187 393.285 46.3013 390.043 44.68 386.544C43.0587 382.96 42.248 378.565 42.248 373.36C42.248 365.765 44.424 359.877 48.776 355.696C53.128 351.515 59.0587 349.424 66.568 349.424C70.664 349.424 74.248 349.979 77.32 351.088C80.4773 352.112 83.08 353.733 85.128 355.952C87.2613 358.171 88.9253 360.987 90.12 364.4C91.4 367.728 92.2533 371.653 92.68 376.176L80.392 379.504C80.136 376.091 79.624 372.976 78.856 370.16C78.088 367.259 76.7227 364.955 74.76 363.248C72.8827 361.456 70.152 360.56 66.568 360.56C62.984 360.56 60.168 361.541 58.12 363.504C56.1573 365.381 55.176 368.197 55.176 371.952C55.176 375.109 55.688 377.712 56.712 379.76C57.8213 381.808 59.5707 383.899 61.96 386.032L79.496 401.392C83.4213 404.805 86.8773 408.901 89.864 413.68C92.8507 418.373 94.344 423.963 94.344 430.448C94.344 435.568 93.2773 440.005 91.144 443.76C89.0107 447.429 86.0667 450.245 82.312 452.208C78.6427 454.171 74.376 455.152 69.512 455.152ZM104.796 454V350.32H118.492V387.696C120.967 385.307 123.74 383.259 126.812 381.552C129.884 379.845 133.297 378.992 137.052 378.992C139.953 378.992 142.172 379.76 143.708 381.296C145.329 382.832 146.439 384.752 147.036 387.056C147.719 389.36 148.06 391.707 148.06 394.096V454H134.364V398.064C134.364 395.419 133.98 393.371 133.212 391.92C132.444 390.469 130.865 389.744 128.476 389.744C126.855 389.744 125.148 390.213 123.356 391.152C121.649 392.091 120.028 393.243 118.492 394.608V454H104.796ZM162.308 454V380.016H176.004V454H162.308ZM162.308 369.008V354.672H176.004V369.008H162.308ZM190.662 454V380.016H203.334V387.056C205.809 384.24 208.539 382.149 211.526 380.784C214.513 379.419 217.585 378.736 220.742 378.736C223.473 378.736 225.905 379.419 228.038 380.784C230.257 382.149 231.835 384.581 232.774 388.08C235.419 384.837 238.278 382.491 241.35 381.04C244.507 379.504 247.793 378.736 251.206 378.736C253.595 378.736 255.771 379.333 257.734 380.528C259.697 381.637 261.275 383.472 262.47 386.032C263.665 388.507 264.262 391.792 264.262 395.888V454H251.718V396.784C251.718 393.2 251.121 390.811 249.926 389.616C248.817 388.336 247.281 387.696 245.318 387.696C243.441 387.696 241.478 388.251 239.43 389.36C237.382 390.384 235.505 391.835 233.798 393.712C233.798 394.053 233.798 394.395 233.798 394.736C233.798 395.077 233.798 395.461 233.798 395.888V454H221.254V396.784C221.254 393.2 220.657 390.811 219.462 389.616C218.353 388.336 216.817 387.696 214.854 387.696C212.977 387.696 211.014 388.251 208.966 389.36C207.003 390.384 205.126 391.835 203.334 393.712V454H190.662ZM278.558 454V380.016H292.254V454H278.558ZM278.558 369.008V354.672H292.254V369.008H278.558ZM304.096 454V444.784L326.752 390.256H306.4V380.016H341.472V387.44L318.688 443.632H340.96V454H304.096ZM361.911 455.024C359.01 455.024 356.748 454.256 355.127 452.72C353.506 451.184 352.354 449.264 351.671 446.96C351.074 444.656 350.775 442.309 350.775 439.92V380.016H364.471V435.824C364.471 438.469 364.855 440.56 365.623 442.096C366.391 443.547 367.97 444.272 370.359 444.272C371.895 444.272 373.474 443.845 375.095 442.992C376.802 442.053 378.423 440.944 379.959 439.664V380.016H393.655V454H379.959V446.704C377.57 449.008 374.839 450.971 371.767 452.592C368.78 454.213 365.495 455.024 361.911 455.024Z"
        fill="white"
      />
    </svg>
  )
}
