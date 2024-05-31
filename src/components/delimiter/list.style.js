export const listStyle = `
<style>
    .main {
      .delimiter {
        height: 1px;
        width: 100%;
        border-top: 1px solid var(--delimiterBorderTopColor);
      
        &.delimiter-with-vertical-margins {
          margin-top: 12px;
          margin-bottom: 12px;
        }
      
        &.delimiter-top-margin {
          margin-top: 12px;
        }
      
        &.delimiter-bottom-margin {
          margin-bottom: 12px;
        }
      
        &.delimiter-cancel-horizontal-margins {
          width: calc(100% + 24px);
          margin-left: -12px;
          margin-right: -12px;
        }
      }
    }
</style>
`;
//# sourceMappingURL=list.style.js.map