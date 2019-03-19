import React, { Component, Fragment } from "react";
import Collapsible from "react-collapsible";
import { css } from "react-emotion";
import { Link } from "gatsby";

const categoryOrder = [
  { id: "docs", name: "General Documentation" },
  { id: "cards", name: "Cards" },
  { id: "flight_directing", name: "Flight Directing" },
  { id: "simulator_config", name: "Simulator Configuration" },
  { id: "mission_writing", name: "Mission Writing" },
  { id: "developers", name: "Developers" },
  { id: "space_edventures", name: "Space EdVentures" }
];
const mainStyle = css`
  color: #aaa;
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.2s ease;
  font-weight: 400;
  &:hover {
    color: #eee;
  }
`;
const offsetStyle = css`
  margin-left: 1rem;
  font-size: 1.1rem;
  font-weight: 300;
`;
const linkStyle = css`
  display: block;
  margin-left: 1rem;
  font-size: 1rem;
  font-weight: 200;
`;
const activeStyle = css`
  font-weight: 600;
  text-decoration: underline;
`;
const positionSort = (a, b) => {
  if (!a.node.frontmatter.position && b.node.frontmatter.position) return 1;
  if (a.node.frontmatter.position && !b.node.frontmatter.position) return -1;
  if (a.node.frontmatter.position > b.node.frontmatter.position) return 1;
  if (a.node.frontmatter.position < b.node.frontmatter.position) return -1;

  return 0;
};
const linkMap = (c, props) => {
  return (
    <Link
      to={c.node.fields && c.node.fields.slug}
      className={`
        ${linkStyle} ${props.id === c.node.id ? activeStyle : ""};
      `}
      key={c.node.id}
    >
      {c.node.frontmatter.sidebar_label || c.node.frontmatter.title}
    </Link>
  );
};
class DocsSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSidebar: props.category,
      openSubSidebar: props.subcategory
    };
  }
  render() {
    const { openSidebar, openSubSidebar } = this.state;
    const { data } = this.props;
    return (
      <Fragment>
        {categoryOrder.map(({ id, name }) => {
          const subcats = data
            .filter(a => a.node.frontmatter.category === id)
            .map(d => d.node.frontmatter.subcategory)
            .filter((a, i, arr) => arr.indexOf(a) === i && a)
            .sort();
          const noSubCat = data
            .filter(
              a =>
                a.node.frontmatter.category === id &&
                !a.node.frontmatter.subcategory
            )
            .sort(positionSort);
          return (
            <Collapsible
              key={id}
              trigger={name}
              className={mainStyle}
              openedClassName={mainStyle}
              easing="ease"
              open={openSidebar === id}
              handleTriggerClick={() =>
                openSidebar === id
                  ? this.setState({ openSidebar: null, openSubSidebar: null })
                  : this.setState({ openSidebar: id, openSubSidebar: null })
              }
            >
              {noSubCat.map(c => linkMap(c, this.props))}
              {subcats.map(s => (
                <Collapsible
                  key={`${id}-${s}`}
                  trigger={s}
                  className={`${offsetStyle} ${mainStyle}`}
                  openedClassName={`${offsetStyle} ${mainStyle}`}
                  easing="ease"
                  open={openSubSidebar === s}
                  handleTriggerClick={() =>
                    openSubSidebar === s
                      ? this.setState({ openSubSidebar: null })
                      : this.setState({ openSubSidebar: s })
                  }
                >
                  {data
                    .filter(
                      a =>
                        a.node.frontmatter.category === id &&
                        a.node.frontmatter.subcategory === s
                    )
                    .sort(positionSort)
                    .map(c => linkMap(c, this.props))}
                </Collapsible>
              ))}
            </Collapsible>
          );
        })}
      </Fragment>
    );
  }
}
export default DocsSidebar;
