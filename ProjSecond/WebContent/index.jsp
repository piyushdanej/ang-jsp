<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page import="java.lang.*" %>
<%@ page import="java.io.*" %>
<%@ page import="java.util.*" %>

<%

String n = request.getParameter("name");
response.setHeader("Access-Control-Allow-Origin","*");
//out.print("E:\\trial\\test.txt for " + n.charAt(1));
		
String cmdStart = "notepad.exe";
String cmd = "C:/Users/Danej/Documents/Piyush/hello.txt";//"cd Documents\\Piyush ";
String str =null;

List<String> openPath = new ArrayList<String>();
openPath.add(cmdStart);
openPath.add(cmd);
		
ProcessBuilder procB = new ProcessBuilder(openPath); // Documents\\Piyush ") ; // && dir /T:W hello.txt");
System.out.println(procB.directory());
procB.redirectErrorStream(true);
Process p = procB.start();

BufferedReader brInput = new BufferedReader(new InputStreamReader(p.getInputStream()));

while((str = brInput.readLine()) != null)
{
	out.println("output Line : "+str);
}
%>