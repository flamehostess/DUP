from .serializers import StageSerializer

def logic_schedule(queryset):
    for q in queryset:
        print(q.name_stage);
    