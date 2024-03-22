//The AreaCalculator component needs to be modified whenever a new shape is added, violating OCP.
import React, { Component } from 'react';

class Rectangle extends Component {
    render() {
        return <div>Rectangle Component</div>;
    }
}

class Circle extends Component {
    render() {
        return <div>Circle Component</div>;
    }
}

class AreaCalculator extends Component {
    calculateArea(shapes) {
        let totalArea = 0;
        for (let shape of shapes) {
            if (shape.type === 'rectangle') {
                totalArea += shape.width * shape.height;
            } else if (shape.type === 'circle') {
                totalArea += Math.PI * Math.pow(shape.radius, 2);
            }
        }
        return totalArea;
    }

    render() {
        return <div>Area Calculator Component</div>;
    }
}

export { Rectangle, Circle, AreaCalculator };
