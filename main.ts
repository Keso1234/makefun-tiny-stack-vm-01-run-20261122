import{mkdirSync as a,readdirSync as b,readFileSync as c,writeFileSync as d}from"node:fs";
import{join as e}from"node:path";
const T=new Map([[0,0],[1,101],[2,401],[3,10],[4,12],[5,22],[6,23],[7,33],[16,21],[17,21],[18,21],[19,21],[20,21],[21,21],[22,21],[23,11],[24,21],[25,21],[26,21],[27,11],[28,21],[29,21],[30,21],[32,21],[33,21],[34,21],[48,200],[49,210],[50,210],[51,200],[52,0],[64,11],[65,20],[80,10],[81,10],[82,1],[83,10]]);
function R(p,q){
let D=new Int32Array(256),s=0,C=new Int32Array(64),h=0,M=new Int32Array(256),o=new Uint8Array(65536),l=0,i=0,g=0,t=0,n=p.length;
let E=x=>({o:o.slice(0,l),c:x});
for(;;){
if(t==1e6)return E(10);
if(g<0||g>=n)return E(9);
let v=T.get(p[g]);
if(v===undefined)return E(5);
let I=v/100|0,P=v/10%10|0,U=v%10;
if(g+I>=n)return E(9);
t++;
let y=g+1+I,k=p[g];
if(s<P)return E(2);
if(s-P+U>256)return E(3);
g=y;
switch(k){
case 0:return E(0);
case 1:D[s++]=(p[y-1]<<24)>>24;break;
case 2:D[s++]=p[y-4]|p[y-3]<<8|p[y-2]<<16|p[y-1]<<24;break;
case 3:s--;break;
case 4:D[s]=D[s-1];s++;break;
case 5:{let z=D[s-1];D[s-1]=D[s-2];D[s-2]=z;break;}
case 6:D[s]=D[s-2];s++;break;
case 7:{let z=D[s-3];D[s-3]=D[s-2];D[s-2]=D[s-1];D[s-1]=z;break;}
case 23:D[s-1]=-D[s-1]|0;break;
case 27:D[s-1]=~D[s-1];break;
case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:case 26:case 28:case 29:case 30:case 32:case 33:case 34:{
let B=D[s-1],A=D[s-2],r;
switch(k){
case 16:r=A+B|0;break;
case 17:r=A-B|0;break;
case 18:r=Math.imul(A,B);break;
case 19:if(!B)return E(4);r=A==-2147483648&&B==-1?A:A/B|0;break;
case 20:if(!B)return E(4);r=B==-1?0:A%B|0;break;
case 21:if(!B)return E(4);r=Math.floor((A>>>0)/(B>>>0))|0;break;
case 22:if(!B)return E(4);r=(A>>>0)%(B>>>0)|0;break;
case 24:r=A&B;break;
case 25:r=A|B;break;
case 26:r=A^B;break;
case 28:r=A<<(B&31);break;
case 29:r=A>>(B&31);break;
case 30:r=(A>>>(B&31))|0;break;
case 32:r=A==B?1:0;break;
case 33:r=A<B?1:0;break;
default:r=(A>>>0)<(B>>>0)?1:0;
}
s-=2;D[s++]=r;break;}
case 48:case 49:case 50:{
let z=(p[y-2]|p[y-1]<<8)<<16>>16,w=1;
if(k!=48){let v=D[--s];w=k==49?v==0:v!=0;}
if(w)g=y+z;
break;}
case 51:if(h==64)return E(7);C[h++]=y;g=p[y-2]|p[y-1]<<8;break;
case 52:if(!h)return E(8);g=C[--h];break;
case 64:{let z=D[s-1];if(z<0||z>255)return E(6);D[s-1]=M[z];break;}
case 65:{let z=D[s-1],v=D[s-2];if(z<0||z>255)return E(6);s-=2;M[z]=v;break;}
case 80:{let z=String(D[s-1]);if(l+z.length>65536)return E(11);s--;for(let j=0;j<z.length;j++)o[l++]=z.charCodeAt(j);break;}
case 81:if(l+1>65536)return E(11);o[l++]=D[--s]&255;break;
case 82:D[s++]=i<q.length?q[i++]:-1;break;
case 83:return E(D[--s]&255);
}
}
}
let A=process.env.MAKEFUN_INPUT_DIR||"/input",B=process.env.MAKEFUN_OUTPUT_DIR||"/output";
for(let id of b(A).sort()){let r=R(new Uint8Array(c(e(A,id,"program.bin"))),new Uint8Array(c(e(A,id,"input.bin"))));a(e(B,id),{recursive:true});d(e(B,id,"stdout.bin"),r.o);d(e(B,id,"exit.txt"),r.c+"\n");}
