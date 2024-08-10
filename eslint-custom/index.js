module.exports = {
  rules: {
    "no-console-log": {
      create: function (context) {
        return {
          CallExpression(node) {
            if (
              node.callee.type === "MemberExpression" &&
              node.callee.object.type === "Identifier" &&
              node.callee.object.name === "console" &&
              node.callee.property.type === "Identifier" &&
              node.callee.property.name === "log"
            ) {
              context.report({
                node,
                message: "Avoid using console.log",
              });
            }
          },
        };
      },
    },
  },
};
