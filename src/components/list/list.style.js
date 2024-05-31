export const listStyle = `
    <style>
        .main {
            background-color: var(--bodyBgColor);
            
            label.title {
                font-weight: 600;
                text-transform: capitalize;
                background-color: var(--listCategoryBgColor);
                width: calc(100% - var(--s-32));
                display: block;
                padding: var(--s-16);
                color: var(--listCategoryColor);
                font-size: var(--fs-14);
                
                & + label.title {
                    margin-top: var(--s-8);
                }
            }
        
            ul {
                list-style-type: none;
                margin: 0;
                padding: 0;
            
                li {
                    margin: 1px 0;
            
                    a {
                        display: block;
                        padding: var(--s-12) var(--s-8) var(--s-12) var(--s-24);
                        width: calc(100% - var(--s-32));
                        color: var(--listLinkColor);
                        text-decoration: none;
            
                        &:hover {
                            background-color: var(--listLinkHoverBgColor);
                        }
            
                        &.isSelected {
                            color: var(--listLinkSelectedColor);
                            background-color: var(--listLinkSelectedBgColor);
                        }
                    }
                }
            }
        }
    </style>
`;
//# sourceMappingURL=list.style.js.map