import * as React from "react";

export interface IDraggableLineWithButtonComponent {
    data: string;
    tooltip: string;
    iconImage: any;
    onIconClick: (value: string) => void;
    iconTitle: string;
    lenSuffixToRemove?: number;
}

export class DraggableLineWithButtonComponent extends React.Component<IDraggableLineWithButtonComponent> {
    constructor(props: IDraggableLineWithButtonComponent) {
        super(props);
    }

    override render() {
        return (
            <div
                className="draggableLine withButton"
                title={this.props.tooltip}
                draggable={true}
                onDragStart={(event) => {
                    event.dataTransfer.setData("babylonjs-render-graph-node", this.props.data);
                }}
            >
                {this.props.data.substr(0, this.props.data.length - (this.props.lenSuffixToRemove ?? 6))}
                <div
                    className="icon"
                    onClick={() => {
                        this.props.onIconClick(this.props.data);
                    }}
                    title={this.props.iconTitle}
                >
                    <img className="img" title={this.props.iconTitle} src={this.props.iconImage} />
                </div>
            </div>
        );
    }
}
