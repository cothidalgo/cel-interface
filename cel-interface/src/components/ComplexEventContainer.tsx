import * as React from "react"
import { Label, ListGroup } from "react-bootstrap"
import ComplexEvent from "./ComplexEvent"

export interface ComplexEventContainerProps {
  complexEvents: { id: number; value: string }[]
}

export interface ComplexEventContainerState {
  complexEvents: { id: number; value: string }[]
}

class ComplexEventContainer extends React.Component<
  ComplexEventContainerProps,
  ComplexEventContainerState
> {
  state = { complexEvents: this.props.complexEvents }

  componentWillReceiveProps(props: ComplexEventContainerProps) {
    this.setState({ complexEvents: props.complexEvents })
  }

  render() {
    return (
      <div>
        <h2>
          <Label bsStyle="default">Complex Events</Label>
        </h2>

        <div
          className="pre-x-scrollable"
          style={{ height: "20vh", overflow: "auto" }}
        >
          <ListGroup style={{ display: "inline-flex" }}>
            {this.state.complexEvents.map((complexEvent, idx) => (
              <a
                href="#"
                className="list-group-item"
                style={{ display: "inline-block", margin: "5px" }}
                key={complexEvent.id}
              >
                <h4 className="list-group-item-heading">
                  Complex Event {complexEvent.id}
                </h4>
                <p className="list-group-item-text">
                  <ComplexEvent value={complexEvent.value} />
                </p>
              </a>
            ))}
          </ListGroup>
        </div>
      </div>
    )
  }
}

export default ComplexEventContainer
