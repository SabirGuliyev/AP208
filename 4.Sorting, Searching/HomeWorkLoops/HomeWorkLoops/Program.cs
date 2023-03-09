
#region a)Task3
//int number = 0;

//while (number % 2 == 0 && number != 0)
//{
//    number /= 2;
//}

//if (number == 1)
//{
//    Console.WriteLine("Ikinin quvvetidir");
//}
//else
//{
//    Console.WriteLine("Deyil");
//} 





#endregion


#region a)Task4
//int num = 7254;
//if (num < 0)
//{
//    num *= -1;
//}
//int max = num % 10;
//num /= 10;

//while (num > 0)
//{
//    if (max < num % 10)
//    {
//        max = num % 10;
//    }
//    num /= 10;
//}
//Console.WriteLine(max); 
#endregion

//int[] numbers = { 22, 5,3,4, 333, 45, 2 };
//int count = 0;
//for (int i = 0; i < numbers.Length; i++)
//{
//    if (numbers[i] >= 0 && numbers[i]<=9)
//    {
//        count++;
//    }

//}

//Console.WriteLine(count);


//int[] numbers = { 655,4, 55, 2, 11, 5 };
//int[] elements = { 2,14, 655,23,11, 15,88, };

//for (int i = 0; i < numbers.Length; i++)
//{
//    for (int j = 0; j < elements.Length; j++)
//    {
//        if (numbers[i] == elements[j])
//        {
//            Console.WriteLine(numbers[i]);
//        }
//    }
//if (numbers[num] == searched)
//{
//    Console.WriteLine(numbers[num]);
//    num = numbers.Length;
//}
//}
//int searched = 25;
//int[] numbers = { 1, 3, 4, 6, 8, 11, 25, 30 };
//int num = numbers.Length / 2;


//if (numbers[num] > searched)
//{
//    num = 0;
//}

//int step = 0;
//for (int i = num; i < numbers.Length; i++)
//{
//    step++;
//    if (numbers[i]==searched)
//    {
//        Console.WriteLine(numbers[i]);
//        break;
//    }
//}

//Console.WriteLine(step);
//int[] arr = { 22, 5, 11, 3, 12, 13, 20,1,222,34,112 };
//int count = 0;
//for (int i = 0; i < arr.Length-1; )
//{
//    count++;
//    if (arr[i] > arr[i+1])
//    {
//        arr[i] += arr[i + 1];
//        arr[i + 1] = arr[i] - arr[i + 1];
//        arr[i] -= arr[i + 1];
//        i = 0;

//    }
//    else
//    {
//        i++;
//    }
//}
//Console.WriteLine(count);
//for (int i = 0; i < arr.Length; i++)
//{
//    Console.WriteLine(arr[i]);
//}