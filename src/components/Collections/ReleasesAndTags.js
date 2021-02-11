import { useQuery } from "@apollo/client";
import { RELEASES_AND_TAGS } from "../../queries/queries";
import moment from "moment";
// import { Card } from "reactstrap";
import { Card } from "antd";

const ReleasesAndTags = ({ owner, repository }) => {
  const { loading, error, data } = useQuery(RELEASES_AND_TAGS, {
    variables: { repositoryName: repository, ownerName: owner },
  });

  console.log(data);

  return (
    <Card className="releases-and-tags">
      <h2>Release Tags</h2>
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
      {data && (
        <div className="information">
          <div className="tags-info">
            <h3>Total Tags: {data.tags.refs.totalCount}</h3>
            <h3>Latest Tag Information: </h3>
            {!data.tags.refs.edges && <p>-</p>}
            {data.tags.refs.edges && data.tags.refs.totalCount && (
              <div>
                <p>Name: {data.tags.refs.edges[0].node.target.name}</p>
                <p>
                  Tag message: {data.tags.refs.edges[0].node.target.message}
                </p>
                <p>
                  Published on:{" "}
                  {moment(
                    new Date(data.tags.refs.edges[0].node.target.tagger.date)
                  ).format("ll")}
                </p>
                <p>Author: {data.tags.refs.edges[0].node.target.tagger.name}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </Card>
  );
};

export default ReleasesAndTags;
