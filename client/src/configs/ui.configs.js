const uiConfigs = {
  style: {
    gradientBgImage: {
      dark: {
        backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))"
      },
      light: {
        backgroundImage: "linear-gradient(to top, rgba(245,245,245,0.2), rgba(0,0,0,0))"
      }
    },
    horizontalGradientBgImage: {
      dark: {
        backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0))"
      },
      light: {
        backgroundImage: "linear-gradient(to right, rgba(245,245,245,0.2), rgba(0,0,0,0))"
      }
    },
    typoLines: (lines, textAlign) => ({
      textAlign: textAlign || "justify",
      display: "-webkit-box",
      overflow: "hidden",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: lines
    }),
    mainContent: {
      maxWidth: "1366px",
      margin: "auto",
      padding: 2
    },
    backgroundImage: (imgPath) => ({
      position: "relative",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: 'no-repeat',
      // width: '100%',
      // paddingTop: '100%',
      backgroundColor: "darkgrey",
      backgroundImage: `url(${imgPath})`
    })
  },
  size: {
    sidebarWith: "300px",
    contentMaxWidth: "1366px"
  }
};

export default uiConfigs;