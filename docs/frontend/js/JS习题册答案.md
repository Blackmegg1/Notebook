# JS习题册答案

1. ```js
   Number(null); // 0
   Number(undefined); //NaN
   Number(Boolean(' ')); //1
   ```

2. ```js
   '2'+'3'='23';
   +'2'++'3'=5;
   ```

3. ```js
   alert(counter); //2
   ```

4. ```js
   ''+1+0='10';
   ''-1+0=-1;
   '$'+1+2='$12';
   '   -9 '+5='   -9 5';
   '   -2'-1=-3;
   '  \t \n '-2=-2;
   ```

5. ```js
   undefined == null; //true
   undefined === null; //false
   ```

6. ```js
   alert(null || 0 || 1); //1;
   alert(null || undefined || 0 || '   ' || -3); //'   '
   ```

7. ```js
   true || alert('print'); // true
   alert(alert(1) || 2 || alert(3)); //alert(1),alert(2)
   alert(alert(1) && alert(2)); //alert(1),alert(undefined)
   alert(null || (2 && 3) || 4); //alert(3)
   ```

8. ```js
   let user;
   alert(user ?? 'default'); //alert('default')
   let height = 0;
   alert(height || 100); //alert(100)
   alert(height ?? 100); //alert(0)
   ```

   