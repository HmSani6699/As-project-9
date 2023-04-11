import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <div className='job-details-title'>
                <h2>Simple Question & Answer</h2>
            </div>
            <div className='blog-container'>
                <h2> 1. When should you use context API?</h2>
                <blockquote>
                    <p>Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.</p>
                </blockquote>

                <h2>2. What is a custom hook?</h2>
                <blockquote>
                    <p>A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks. Let's take a look at some major differences between a custom React JS hook and React JS components: A custom hook does not require a specific signature.</p>
                </blockquote>

                <h2>3. What is useRef?</h2>
                <blockquote>
                    <p>useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current .</p>
                </blockquote>

                <h2>4. What is useMemo?</h2>
                <blockquote>
                    <p>useMemo() is a function that returns a memoized value of a passed in resource-intensive function. It is very useful in optimizing the performance of a React component by eliminating repeating heavy computations.</p>
                </blockquote>
            </div>
        </div>
    );
};

export default Blog;