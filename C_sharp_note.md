~~~C#
using System;
using System.Threading.Tasks;

var t = AsyncFunc2();
Console.WriteLine("Main");
Console.WriteLine(t.Result);

async Task<int> AsyncFunc1()
{
    await Task.Delay(1000);
    Console.WriteLine("1");
    return 8888;
}

async Task<int> AsyncFunc2()
{
    await Task.Delay(1000);
    Console.WriteLine("2");
    var t = await AsyncFunc1();
    Console.WriteLine("x");
    return await AsyncFunc1();
}

~~~



Main
2
1
x
1
8888

~~~C#
using System;
using System.Threading.Tasks;

var t = AsyncFunc2();
Console.WriteLine("Main");
Console.WriteLine(t.Result);

async Task<int> AsyncFunc1()
{
    await Task.Delay(1000);
    Console.WriteLine("1");
    return 8888;
}

async Task<int> AsyncFunc2()
{
    await Task.Delay(1000);
    Console.WriteLine("2");
    var t = AsyncFunc1();
    Console.WriteLine("x");
    return await AsyncFunc1();
}

~~~

Main
2
x
1
1
8888



执行await 后的语句时，所在的语句块会被跳出，执行外面的操作，直到await 后的语句执行完毕，再跳回来执行下面的语句。