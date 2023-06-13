import { BLOCKS } from "@contentful/rich-text-types";

export const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
        return (
          <iframe
            allowFullScreen={true}
            frameBorder="0"
            height="100%"
            scrolling="no"
            src={node.data.target.fields.embedUrl}
            title={node.data.target.fields.title}
            width="100%"
          />
        );
      }
    },

    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      // render the EMBEDDED_ASSET as you need
      return (
        <img
          alt={node.data.target.fields.description}
          height={node.data.target.fields.file.details.image.height}
          src={`https://${node.data.target.fields.file.url}`}
          width={node.data.target.fields.file.details.image.width}
        />
      );
    },
  },
};
