
//int[] arr = {23,45,1,22,68,55,77,45};
//string[] words = { "Salam", "Hello", "Hi"};
////Console.WriteLine(arr[0]);

////arr[0] = 200;

//for (int i = 0; i < arr.Length; i++)
//{
//    //if (arr[i]%2==0)
//    //{
//    //    continue;

//    //}
//    //Console.WriteLine(arr[i]);
//}


//string word = "ASilm";
//for (int i = 0; i < word.Length; i++)
//{
//    if (word[i]=='a'|| word[i]=='A')
//    {
//        Console.WriteLine("a herfi var");
//        break;
//    }

//}



//int[,] numbers = 
//{
//    {5,2,4},
//    {7,5,5},
//    {10,23,55} 
//};

//Console.WriteLine(numbers.Rank);

//string[] words = { "Salam", "Dunya", "Bayram" };
//for (int i = 0; i < words[0].Length; i++)
//{
//    Console.WriteLine(words[0][i]);

//}
//Console.WriteLine(words[0]);
//Console.WriteLine(words[0][4]);

//int num = 20000;
//for (int i = 0; i < num; i++)
//{
//    Console.WriteLine(i);
//}



//if (num>10)
//{
//    Console.WriteLine("Boyukdur");
//}
//else
//{
//    Console.WriteLine("Kicikdir");
//}

//int num=157;
//bool result = false;
//int step=0;

//for (int i = 2; i*i< num; i++)
//{
//    step++;
//    if (num%i==0)
//    {
//        result = true;
//        break;
//    }
//}
//if (result)
//{
//    Console.WriteLine("Murekkeb");
//}
//else
//{
//    Console.WriteLine("Sadedir");
//}
//Console.WriteLine(step);

//int num = 20;
//int step = 0;
//for (int i = 0; i < num; i++)
//{
//    for (int j = 0; j < num; j++)
//    {
//        step++;
//    }
//}

//Console.WriteLine(step);



//int[] numbers = { 23, 6,1, 28, 9, 3,0 };
//int min = numbers[0];

//for (int i = 1; i<numbers.Length; i++)
//{
//    if (numbers[i]<min)
//    {
//        min = numbers[i];
//    }
//}
//Console.WriteLine(min);


int[] numbers = {0,4, 5, 6,9,11,23,20};
double result = 0;
int count=0;

for (int i = 0; i < numbers.Length; i++)
{
    if (numbers[i] % 2 == 0)
    {
        count++;
        result+=numbers[i];
    }

}

Console.WriteLine(result/count);