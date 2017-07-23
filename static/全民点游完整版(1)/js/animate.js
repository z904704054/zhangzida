function getStyle(obj,attr){
    // �������  ��ν��������⣬Ҳ���ǿ�������Ƿ�֧�ִ˶�������Ի��Ƿ���
    if(obj&&obj.currentStyle){
        return  obj.currentStyle[attr];
    }else {
        return  getComputedStyle(obj,null)[attr];
    }
}

function animate(obj,json,fn){
    // Ϊ�˱�֤��ǰ�����˶���ʱ��ֻ�Ὺ��һ����ʱ������Ҫ����ʱ�����ڵ�ǰ�����������
    clearInterval(obj.timerId);
    obj.timerId = setInterval(function (){
        var flag = true;
        for(var key in json){
            if(key=="opacity"){
                var leader = parseInt(getStyle(obj,key)*100)||0; //��Ϊopacity��С����Ϊ�˱��ڼ��㣬�Ƚ���ֵ����100��
                var target = json[key]*100;//�������json�����Ŀ��λ��
                var step = (target-leader)/10;
                step=  step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;
                obj.style[key] = leader/100;
            }else if(key=="zIndex"){
                var leader = parseInt(getStyle(obj,key))||0; //��ǰ�������ڵ�����ֵ
                var target = json[key];//�������json�����Ŀ��λ��
                step = (target-leader)/10;
                step=  step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;
                obj.style[key] = leader;
            }else {
                var leader = parseInt(getStyle(obj,key))||0; //��ǰ�������ڵ�����ֵ
                var target = json[key];//�������json�����Ŀ��λ��
                var step = (target-leader)/10;
                step=  step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;
                obj.style[key] = leader +'px';
            }
            if(leader!=target){ //�����һ�����Ե�ֵû�е���Ŀ��λ�õĻ�,��Ҫ��flagΪfalse
                flag = false;
            }
        }
        if(flag){ // Ҫ����flag��ֵ��ȷ���Ƿ�Ҫ�����ʱ��
            clearInterval(obj.timerId);
            if(fn){ //���fn��ֵ��������һ�������Ļ���������������
                fn();
            }
        }
    },15)
}/**
 * Created by 50672 on 2017/7/15.
 */
