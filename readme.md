#### 1 What is the difference between var, let, and const?

##### var হলো function scoped, পুনরায় declare করা যায়, value বদলানো যায়, hoisting এ Undefined হয়।

##### let হলো block scoped, পুনরায় declare করা যায় না, value পরিবর্তন করা যায়। let কে declare করার আগে ব্যবহার করলে Temporal Dead Zone error দেখায়।

##### const হলো block scoped, পুনরায় declare করা যায় না, const এ value পরিবর্তন করা যায় না, কিন্তু array/ object এর ভেতরের মান পরিবর্তন করা যায়, const কে declare করার আগে ব্যবহার করলে Temporal Dead Zone error দেখায়।

#### 2 What is the difference between map(), forEach(), and filter()?

##### map() প্রতিটি element এর উপর কাজ করে নতুন array return করে।

##### forEach() শুধু array-এর প্রতিটি element এর উপর কাজ চালায়, কিছু return করে না।

##### filter() শর্ত মিলে এমন element গুলো নিয়ে নতুন array return করে।

#### 3 What are arrow functions in ES6?

##### arrow functions হলো ES6 এ আসা নতুন function লেখার ছোট ও সহজ সিনট্যাক্স। এক লাইনে ছোট function লেখা যায়।

#### 4 How does destructuring assignment work in ES6?

##### Destructuring assignment হলো ES6 এর একটি ফিচার যেটা দিয়ে array বা object থেকে আলাদা আলাদা ভেরিয়েবল ডেটা নেওয়া যায় সহজভাবে।

#### 5 Explain template literals in ES6. How are they different from string concatenation?

##### Template literals হলো ES6 এ string লেখার নতুন পদ্ধতি, যেখানে backtick (`) ব্যবহার করা হয়। এত করি ভিরিয়েবল বা এক্সপ্রেশণ ${} এর মধ্যে বসানো যায়। মাল্টি-লাইন স্ট্রিং সহজে লেখা যায়।
