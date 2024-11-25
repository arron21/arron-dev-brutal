---
date: "2021-04-05"
title: Useful JavaScript String Functions
tag: post

---
### Getting the last 4 characters of a string

The easiest way to get the last 4 characters of a string is by using a **.slice()**

    const str = "Wj34H9PU50UI24k49u9BtUX1nkBe6P4Z AUTO"
    
    const lastFour = str.slice(-4);
    
    console.log(lastFour); // "AUTO"