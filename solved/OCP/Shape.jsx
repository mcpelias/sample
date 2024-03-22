// Extended the Shape component and implemented new shapes without modifying existing code.
import React, { Component } from 'react';

class Shape extends Component {
    area() {
        return 0;
    }
}

class Rectangle extends Shape {
    render() {
        return <div>Rectangle Component</div>;
    }

    area() {
        return this.props.width * this.props.height;
    }
}

class Circle extends Shape {
    render() {
        return <div>Circle Component</div>;
    }

    area() {
        return Math.PI * Math.pow(this.props.radius, 2);
    }
}

class AreaCalculator extends Component {
    calculateArea(shapes) {
        let totalArea = 0;
        for (let shape of shapes) {
            totalArea += shape.area();
        }
        return totalArea;
    }

    render() {
        return <div>Area Calculator Component</div>;
    }
}

export { Rectangle, Circle, AreaCalculator };
